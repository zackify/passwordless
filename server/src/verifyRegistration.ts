import base64url from "base64url";
import { verifyAttestation } from "./attestation/verifyAttestation";
import { VerificationResponse } from "./verify";

export type RegistrationCredential = {
  rawId: string;
  id: string;
  response: {
    clientDataJSON: string;
    getTransports: any;
    attestationObject: string;
  };
  getClientExtensionResults: any;
  type: string;
};

type Props = {
  credential: RegistrationCredential;
};

export const verifyRegistration = ({
  credential
}: Props): Promise<VerificationResponse> => {
  return verifyAttestation(credential);
};
