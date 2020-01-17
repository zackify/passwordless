import crypto from "crypto";
import base64url from "base64url";

// the official types expects a buffersource for the id / challenge, this
// is being sent from the server as a string, so we have to fix the types :/
type publicKeyOptions = Omit<
  PublicKeyCredentialCreationOptions,
  "challenge"
> & {
  challenge: string;
};

type Props = {
  rp: PublicKeyCredentialCreationOptions["rp"];
  user: Omit<PublicKeyCredentialCreationOptions["user"], "id"> & { id: string };

  excludedCredIds?: string[];
  pubKeyCredParams?: PublicKeyCredentialCreationOptions["pubKeyCredParams"];
  authenticatorSelection?: PublicKeyCredentialCreationOptions["authenticatorSelection"];
  attestation?: PublicKeyCredentialCreationOptions["attestation"];
};

export const prepareRegistration = async ({
  rp,
  user,
  attestation,
  pubKeyCredParams,
  excludedCredIds = [],
  authenticatorSelection
}: Props): Promise<publicKeyOptions> => {
  return {
    rp,
    excludeCredentials: excludedCredIds.map(id => ({
      type: "public-key",
      id: id as any //on the server we cant use a buffersource, this type is meant for frontend
    })),
    user: user as any,
    challenge: base64url(crypto.randomBytes(64)),
    pubKeyCredParams: pubKeyCredParams || [{ alg: -7, type: "public-key" }],
    authenticatorSelection: authenticatorSelection || {
      userVerification: "preferred",
      authenticatorAttachment: "cross-platform"
    },
    timeout: 20000,
    attestation: attestation || "direct"
  };
};
