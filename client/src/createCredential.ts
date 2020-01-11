import { credentialToJSON } from "./credentialToJSON";
import { decode } from "./base64";

const defaultPublicKeyOptions: Partial<PublicKeyCredentialCreationOptions> = {
  pubKeyCredParams: [{ alg: -7, type: "public-key" }],
  authenticatorSelection: {
    userVerification: "preferred",
    authenticatorAttachment: "cross-platform"
  },
  timeout: 60000,
  attestation: "direct"
};

/*
  Take the types from the official PublicKeyCredentialCreationOptions type,
  but omit the challenge and user types,
  this is due to our api letting you pass a string for each, and let our library
  do the conversion to a BufferSource
*/

type Props = Partial<
  Omit<PublicKeyCredentialCreationOptions, "challenge" | "user">
> & {
  challenge: string;
  rp: PublicKeyCredentialCreationOptions["rp"];
  user: Omit<PublicKeyCredentialCreationOptions["user"], "id"> & {
    id: string;
  };
};

export const createCredential = async ({
  challenge,
  rp,
  user,
  ...publicKey
}: Props) => {
  const credential = await navigator.credentials.create({
    publicKey: {
      challenge: decode(challenge),
      ...defaultPublicKeyOptions,
      ...publicKey,
      user: {
        ...user,
        id: Uint8Array.from(user.id, c => c.charCodeAt(0))
      },
      rp
    } as PublicKeyCredentialCreationOptions
  });

  return credentialToJSON(credential);
};
