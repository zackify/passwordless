import crypto from "crypto";
import base64url from "base64url";

type Props = {
  credIDs: string[];
  authenticatorSelection?: PublicKeyCredentialCreationOptions["authenticatorSelection"];
};

export const prepareLogin = ({ credIDs, authenticatorSelection }: Props) => {
  return {
    authenticatorSelection,
    challenge: base64url(crypto.randomBytes(64)),
    allowCredentials: credIDs.map(id => ({
      type: "public-key",
      id
    }))
  };
};
