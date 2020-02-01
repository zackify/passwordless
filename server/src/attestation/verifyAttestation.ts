import base64url from "base64url";
import cbor from "cbor";
import { attestationTypes } from "./types/types";
import { COSEECDHAtoPKCS } from "../helpers/COSEECDHAtoPKCS";
import { parseCredAuthData } from "../helpers/parseCredAuthData";
import { RegistrationCredential } from "../verifyRegistration";
import { deviceDataFromPEM } from "./devices/devices";

export const verifyAttestation = async (
  webAuthnResponse: RegistrationCredential
) => {
  const attestationBuffer = base64url.toBuffer(
    webAuthnResponse.response.attestationObject
  );
  const credentialResponse = cbor.decodeAllSync(attestationBuffer)[0];
  const authrDataStruct = parseCredAuthData(credentialResponse.authData);

  if (!(authrDataStruct.flags & 0x01))
    return {
      verified: false,
      message: "User was NOT presented durring authentication!"
    };

  const publicKey = COSEECDHAtoPKCS(authrDataStruct.COSEPublicKey);

  const attestationData = {
    publicKey,
    authrDataStruct,
    webAuthnResponse,
    credentialResponse
  };

  let attestationType = attestationTypes.find(type =>
    type.isType(attestationData)
  );
  // log this in the passwordless app if it ever happens
  if (!attestationType)
    return {
      verified: false,
      message: `The type ${credentialResponse.fmt} is not supported yet`
    };

  let response = await attestationType.verify(attestationData);

  if (response.verified) {
    return {
      pem: response.pem,
      verified: true,
      credential: {
        name: response.pem ? deviceDataFromPEM(response.pem) : "",
        fmt: credentialResponse.fmt,
        publicKey: base64url.encode(publicKey),
        counter: authrDataStruct.counter,
        id: base64url.encode(authrDataStruct.credID)
      }
    };
  }

  return response;
};
