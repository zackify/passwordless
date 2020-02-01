import { AttestationType } from "./types";

export const tpm: AttestationType = {
  isType: ({ credentialResponse }) => credentialResponse.fmt === "tpm",
  verify: () => {
    console.log("tpm logic isn't in place yet.");

    return { verified: true };
  }
};
