import crypto from 'crypto';

export const hash = (data: any) => {
  return crypto
    .createHash('sha256')
    .update(data)
    .digest();
};
