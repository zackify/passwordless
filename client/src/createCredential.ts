import { credentialToJSON } from "./credentialToJSON";
import { decode } from "./base64";
import { CredentialResponse } from "./getCredential";

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

export type CreateCredentialProps = Partial<
  Omit<PublicKeyCredentialCreationOptions, "challenge" | "user">
> & {
  challenge: string;
  rp: PublicKeyCredentialCreationOptions["rp"];
  user: Omit<PublicKeyCredentialCreationOptions["user"], "id"> & {
    id: string;
  };
  excludeCredentials: any;
};

export const unsupportedCheck = (): CredentialResponse | undefined => {
  if (!window.PublicKeyCredential)
    return {
      verified: false,
      reason: "unsupported",
      message:
        "Your browser doesn't support hardware authentication, please update it"
    };
};

export const createCredential = async ({
  challenge,
  rp,
  user,
  excludeCredentials,
  ...publicKey
}: CreateCredentialProps): Promise<CredentialResponse> => {
  let unsupported = unsupportedCheck();
  if (unsupported) return unsupported;

  try {
    const rawCredential = await navigator.credentials.create({
      publicKey: {
        challenge: decode(challenge),
        ...defaultPublicKeyOptions,
        ...publicKey,
        user: {
          ...user,
          id: Uint8Array.from(user.id, c => c.charCodeAt(0))
        },
        excludeCredentials: excludeCredentials.map((cred: any) => ({
          ...cred,
          id: decode(cred.id)
        })),
        rp
      } as PublicKeyCredentialCreationOptions
    });

    let credential = credentialToJSON(rawCredential);
    return { credential };
  } catch (error) {
    return {
      error,
      verified: false,
      reason: "credential",
      message: error.message
    };
  }
};
