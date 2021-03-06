import { hash } from "./helpers/hash";
import base64url from "base64url";
import { ASN1toPEM } from "./helpers/ASN1toPEM";
import { parseAuthData } from "./helpers/parseAuthData";
import { verifySignature } from "./helpers/verifySignature";
import { DeviceCredential } from "./verify";

export type LoginCredential = {
  rawId: string;
  id: string;
  response: {
    clientDataJSON: string;
    authenticatorData: string;
    signature: string;
    userHandle: any;
  };
  getClientExtensionResults: any;
  type: string;
};

type Props = {
  credential: LoginCredential;
  creds: DeviceCredential[];
};

export const verifyLogin = ({ credential, creds }: Props) => {
  const authenticatorData = base64url.toBuffer(
    credential.response.authenticatorData
  );
  const authrDataStruct = parseAuthData(authenticatorData);
  const clientDataHash = hash(
    base64url.toBuffer(credential.response.clientDataJSON)
  );
  const signatureBase = Buffer.concat([
    authrDataStruct.rpIdHash,
    authrDataStruct.flagsBuf,
    authrDataStruct.counterBuf,
    clientDataHash
  ]);
  const signature = base64url.toBuffer(credential.response.signature);

  const cred = creds.find(cred => credential.id === cred.id);

  if (!cred)
    return {
      verified: false,
      message:
        "Cred id from card doesnt match what you passed to verfy function"
    };

  if (cred.counter > authrDataStruct.counter) {
    return {
      verified: false,
      message:
        "credential count is less than previous value, this shouldn't be possible"
    };
  }

  let publicKey = ASN1toPEM(base64url.toBuffer(cred.publicKey));
  let verified = verifySignature(signature, signatureBase, publicKey);

  return {
    verified,
    matchingCredID: credential.id,
    credential: verified
      ? {
          format: cred.format,
          counter: authrDataStruct.counter,
          publicKey: base64url.encode(publicKey),
          id: base64url.encode(cred.id)
        }
      : undefined
  };
};
