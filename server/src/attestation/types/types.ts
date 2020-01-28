import { androidSafetynet } from "./android-safetynet";
import { fidoU2f } from "./fido-u2f";
import { none } from "./none";
import { packed } from "./packed";
import { selfPacked } from "./self-packed";
import { RegistrationCredential } from "../../verifyRegistration";
//import { tpm } from "./tpm";

export type AttestationData = {
  publicKey: Buffer;
  webAuthnResponse: RegistrationCredential;

  //type these later
  authrDataStruct: any;
  credentialResponse: any;
};

export type AttestationResponse = {
  pem?: string;
  message?: string;
  verified: boolean;
};

export type AttestationType = {
  isType: (data: AttestationData) => boolean;
  verify: (data: AttestationData) => AttestationResponse;
};

export const attestationTypes: AttestationType[] = [
  androidSafetynet,
  fidoU2f,
  none,
  packed,
  //tpm,
  selfPacked
];
