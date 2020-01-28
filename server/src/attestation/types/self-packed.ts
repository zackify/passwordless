//https://www.w3.org/TR/webauthn/#packed-attestation
import base64url from "base64url";
import { AttestationType } from "./types";
import { hash } from "../../helpers/hash";
import { ASN1toPEM } from "../../helpers/ASN1toPEM";
import { verifySignature } from "../../helpers/verifySignature";

export const selfPacked: AttestationType = {
  isType: ({ credentialResponse }) =>
    credentialResponse.fmt === "packed" &&
    !credentialResponse.attStmt.hasOwnProperty("x5c"),
  verify: ({
    webAuthnResponse,
    credentialResponse,
    authrDataStruct,
    publicKey
  }) => {
    const clientDataHash = hash(
      base64url.toBuffer(webAuthnResponse.response.clientDataJSON)
    );
    const signatureBase = Buffer.concat([
      credentialResponse.authData,
      clientDataHash
    ]);
    const pem = ASN1toPEM(publicKey);
    const {
      attStmt: { sig: signature, alg }
    } = credentialResponse;

    // Verify that sig is a valid signature over the concatenation of authenticatorData
    // and clientDataHash using the attestation public key in attestnCert with the algorithm specified in alg.
    return {
      pem,
      verified: verifySignature(signature, signatureBase, pem) && alg === -7
    };
  }
};
