import crypto from "crypto";
import base64url from "base64url";

type Props = {
  credIds: string[];
  authenticatorSelection?: PublicKeyCredentialCreationOptions["authenticatorSelection"];
};

export const prepareLogin = ({ credIds, authenticatorSelection }: Props) => {
  return {
    authenticatorSelection,
    challenge: base64url(crypto.randomBytes(64)),
    allowCredentials: credIds.map(id => ({
      type: "public-key",
      id
    }))
  };
};
