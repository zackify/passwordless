import base64url from 'base64url';
import crypto from 'crypto';

export const generateChallenge = () => {
  let buff = crypto.randomBytes(64);

  return base64url(buff);
};
