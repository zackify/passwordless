import base64url from "base64url";
import { AttestationType } from "./types";
import { hash } from "../../helpers/hash";
import { ASN1toPEM } from "../../helpers/ASN1toPEM";
import { verifySignature } from "../../helpers/verifySignature";

export const fidoU2f: AttestationType = {
  isType: ({ credentialResponse }) => credentialResponse.fmt === "fido-u2f",
  verify: ({
    webAuthnResponse,
    authrDataStruct,
    credentialResponse,
    publicKey
  }) => {
    const clientDataHash = hash(
      base64url.toBuffer(webAuthnResponse.response.clientDataJSON)
    );
    const reservedByte = Buffer.from([0x00]);
    const signatureBase = Buffer.concat([
      reservedByte,
      authrDataStruct.rpIdHash,
      clientDataHash,
      authrDataStruct.credID,
      publicKey
    ]);

    const pem = ASN1toPEM(credentialResponse.attStmt.x5c[0]);
    const signature = credentialResponse.attStmt.sig;

    return {
      pem,
      verified: verifySignature(signature, signatureBase, pem)
    };
  }
};
