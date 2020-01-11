import { AttestationType } from "./types";

export const none: AttestationType = {
  isType: ({ credentialResponse }) => credentialResponse.fmt === "none",
  verify: () => {
    return {
      verified: true,
      message: "attestation type is none, verification skipped"
    };
  }
};
