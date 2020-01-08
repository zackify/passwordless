import crypto from "crypto";
import base64url from "base64url";

type Props = {
  credIDs: string[];
};

export const generateLoginData = ({ credIDs }: Props) => {
  return {
    challenge: base64url(crypto.randomBytes(64)),
    allowCredentials: credIDs.map(id => ({
      type: "public-key",
      id,
      transports: ["usb", "nfc", "ble"]
    }))
  };
};
