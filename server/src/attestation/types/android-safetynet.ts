//https://www.w3.org/TR/webauthn/#packed-attestation
import base64url from "base64url";
import { Certificate } from "@fidm/x509";
import { AttestationType } from "./types";
import { ASN1toPEM } from "../../helpers/ASN1toPEM";
import { verifySignature } from "../../helpers/verifySignature";

export const androidSafetynet: AttestationType = {
  isType: ({ credentialResponse }) =>
    credentialResponse.fmt === "android-safetynet",
  verify: ({ credentialResponse }) => {
    let [
      header,
      payload,
      signature
    ] = credentialResponse.attStmt.response.toString("utf8").split(".");
    const signatureBase = Buffer.from([header, payload].join("."));

    header = JSON.parse(base64url.decode(header));
    payload = JSON.parse(base64url.decode(payload));
    signature = base64url.toBuffer(signature);

    console.log("JWS HEADER", header);
    console.log("JWS PAYLOAD", payload);
    console.log("JWS SIGNATURE", signature);

    const pem = ASN1toPEM(Buffer.from(header.x5c[0], "base64"));

    const parsedPem = Certificate.fromPEM((pem as unknown) as Buffer);

    const verified = // Verify that sig is a valid signature over the concatenation of authenticatorData
      // and clientDataHash using the attestation public key in attestnCert with the algorithm specified in alg.
      verifySignature(signature, signatureBase, pem) &&
      // version must be 3 (which is indicated by an ASN.1 INTEGER with value 2)
      parsedPem.version == 3 &&
      parsedPem.subject.commonName === "attest.android.com";

    return {
      pem,
      verified
    };
  }
};
