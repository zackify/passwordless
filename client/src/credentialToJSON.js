// Barely changed, taken from
// https://github.com/strangerlabs/webauthn
import { encode } from "./base64";

export const credentialToJSON = pubKeyCred => {
  if (ArrayBuffer.isView(pubKeyCred)) {
    return credentialToJSON(pubKeyCred.buffer);
  }

  if (pubKeyCred instanceof Array) {
    const arr = [];

    for (let i of pubKeyCred) {
      arr.push(credentialToJSON(i));
    }

    return arr;
  }

  if (pubKeyCred instanceof ArrayBuffer) {
    return encode(pubKeyCred);
  }

  if (pubKeyCred instanceof Object) {
    const obj = {};

    for (let key in pubKeyCred) {
      obj[key] = credentialToJSON(pubKeyCred[key]);
    }

    return obj;
  }

  return pubKeyCred;
};
