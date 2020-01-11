//https://www.w3.org/TR/webauthn/#packed-attestation
import base64url from "base64url";
import iso_3166_1 from "iso-3166-1";
import { Certificate } from "@fidm/x509";
import { hash } from "../../helpers/hash";
import { AttestationType } from "./types";
import { ASN1toPEM } from "../../helpers/ASN1toPEM";
import { verifySignature } from "../../helpers/verifySignature";

export const packed: AttestationType = {
  isType: ({ credentialResponse }) =>
    credentialResponse.fmt === "packed" &&
    credentialResponse.attStmt.hasOwnProperty("x5c"),
  verify: ({ webAuthnResponse, credentialResponse, authrDataStruct }) => {
    const clientDataHash = hash(
      base64url.toBuffer(webAuthnResponse.response.clientDataJSON)
    );
    const signatureBase = Buffer.concat([
      credentialResponse.authData,
      clientDataHash
    ]);

    const pem: any = ASN1toPEM(credentialResponse.attStmt.x5c[0]);
    const signature = credentialResponse.attStmt.sig;
    const parsedPem = Certificate.fromPEM((pem as unknown) as Buffer);

    // Getting requirements from https://www.w3.org/TR/webauthn/#packed-attestation
    const aaguid_ext = parsedPem.getExtension("1.3.6.1.4.1.45724.1.1.4");

    let verified = // Verify that sig is a valid signature over the concatenation of authenticatorData
      // and clientDataHash using the attestation public key in attestnCert with the algorithm specified in alg.
      verifySignature(signature, signatureBase, pem) &&
      // version must be 3 (which is indicated by an ASN.1 INTEGER with value 2)
      parsedPem.version == 3 &&
      // ISO 3166 valid country
      typeof iso_3166_1.whereAlpha2(parsedPem.subject.countryName) !==
        "undefined" &&
      // Legal name of the Authenticator vendor (UTF8String)
      parsedPem.subject.organizationName &&
      // Literal string “Authenticator Attestation” (UTF8String)
      parsedPem.subject.organizationalUnitName ===
        "Authenticator Attestation" &&
      // A UTF8String of the vendor’s choosing
      parsedPem.subject.commonName &&
      // If attestnCert contains an extension with OID 1.3.6.1.4.1.45724.1.1.4 (id-fido-gen-ce-aaguid)
      // verify that the value of this extension matches the aaguid in authenticatorData.
      // The extension MUST NOT be marked as critical.
      (aaguid_ext != null
        ? authrDataStruct.hasOwnProperty("aaguid")
          ? !aaguid_ext.critical &&
            aaguid_ext.value.slice(2).equals(authrDataStruct.aaguid)
          : false
        : true);
    return {
      pem,
      verified
    };
  }
};
