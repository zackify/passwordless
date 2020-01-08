import crypto from "crypto";
import base64url from "base64url";

// the official types expects a buffersource for the id / challenge, this
// is being sent from the server as a string, so we have to fix the types :/
type publicKeyOptions = Omit<
  PublicKeyCredentialCreationOptions,
  "challenge" | "user"
> & {
  challenge: string;
  user: Omit<PublicKeyCredentialCreationOptions["user"], "id"> & {
    id: string;
  };
};

type Props = {
  username: string;
  rp: PublicKeyCredentialCreationOptions["rp"];
  createChallengeToken: (challenge: string) => any;
};

export const generateRegistrationData = async ({
  rp,
  username
}: Props): Promise<publicKeyOptions> => {
  return {
    rp,
    challenge: base64url(crypto.randomBytes(64)),
    pubKeyCredParams: [{ alg: -7, type: "public-key" }],
    authenticatorSelection: {
      userVerification: "preferred",
      authenticatorAttachment: "cross-platform"
    },
    timeout: 60000,
    attestation: "direct",

    user: {
      id: "useridfromserver", // use uuid
      name: username,
      displayName: username
    }
  };
};
