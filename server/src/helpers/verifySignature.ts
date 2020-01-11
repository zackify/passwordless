import crypto from 'crypto';

export const verifySignature = (signature: any, data: any, publicKey: any) => {
  return crypto
    .createVerify('SHA256')
    .update(data)
    .verify(publicKey, signature);
};
