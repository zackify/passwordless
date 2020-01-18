import { credentialToJSON } from "./credentialToJSON";
import { decode } from "./base64";

/**
 * Exporting and stuff
 */
type Props = {
  challenge: string;
  allowCredentials: any;
};

export type CredentialResponse = {
  credential?: any;

  error?: Error;
  message?: string;
  verified?: boolean;
  reason?: "credential";
};

export const getCredential = async ({
  challenge,
  allowCredentials
}: Props): Promise<CredentialResponse> => {
  try {
    const publicKey: any = {
      userVerification: "preferred",
      challenge: decode(challenge),
      allowCredentials: allowCredentials.map((cred: any) => ({
        ...cred,
        id: decode(cred.id)
      }))
    };

    let rawCredential = await navigator.credentials.get({ publicKey });
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
