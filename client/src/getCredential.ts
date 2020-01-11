import { credentialToJSON } from "./credentialToJSON";
import { decode } from "./base64";

/**
 * Exporting and stuff
 */
type Props = {
  challenge: string;
  allowCredentials: any;
};
export const getCredential = async ({ challenge, allowCredentials }: Props) => {
  const publicKey: any = {
    userVerification: "preferred",
    challenge: decode(challenge),
    allowCredentials: allowCredentials.map((cred: any) => ({
      ...cred,
      id: decode(cred.id)
    }))
  };
  try {
    let credential = await navigator.credentials.get({ publicKey });
    return credentialToJSON(credential);
  } catch (e) {
    console.error(e);
  }
};
