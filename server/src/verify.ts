import base64url from "base64url";
import { verifyLogin, LoginCredential } from "./verifyLogin";
import {
  verifyRegistration,
  RegistrationCredential
} from "./verifyRegistration";

export type AuthrInfo = {
  fmt: string;
  publicKey: string;
  counter: number;
  credID: string;
};

type Props = {
  credential: RegistrationCredential | LoginCredential;
  challenge: string;
  origin: string;
  creds?: AuthrInfo[];
};

export type VerificationResponse = {
  verified: boolean;
  message?: string;
  authrInfo?: AuthrInfo;
};

export const verify = async ({
  credential,
  challenge,
  origin,
  creds
}: Props): Promise<VerificationResponse> => {
  if (!credential || !credential.response)
    return {
      verified: false,
      message: "Credential is missing data"
    };
  let data = JSON.parse(base64url.decode(credential.response.clientDataJSON));

  /* Check challenge... */
  if (data.challenge !== challenge) {
    return {
      verified: false,
      message: "Challenges don't match!"
    };
  }

  /* ...and origin */
  if (data.origin !== origin) {
    return {
      verified: false,
      message: "Origins don't match!"
    };
  }
  /* check type */
  if (credential.type !== "public-key") {
    return {
      verified: false,
      message: "credential type must be public-key"
    };
  }
  /* if there's an attestationObject, this is a registration credential */
  if ((credential as RegistrationCredential).response.attestationObject) {
    return verifyRegistration({
      credential: credential as RegistrationCredential
    });
  }

  /* if there's authenticatorData, this is a login credential */
  if ((credential as LoginCredential).response.authenticatorData) {
    if (!creds)
      return {
        verified: false,
        message: "Must pass credIDs for the user when calling verifyLogin"
      };
    return verifyLogin({
      credential: credential as LoginCredential,
      creds
    });
  }

  return {
    verified: false,
    message: "Credential object is missing required fields"
  };
};
