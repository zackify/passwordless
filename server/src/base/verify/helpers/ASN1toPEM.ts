export const ASN1toPEM = (pkBuffer: any) => {
  if (!Buffer.isBuffer(pkBuffer)) {
    throw new Error('ASN1toPEM: pkBuffer must be Buffer.');
  }

  let type;
  if (pkBuffer.length == 65 && pkBuffer[0] == 0x04) {
    pkBuffer = Buffer.concat([
      Buffer.from(
        '3059301306072a8648ce3d020106082a8648ce3d030107034200',
        'hex',
      ),
      pkBuffer,
    ]);

    type = 'PUBLIC KEY';
  } else {
    type = 'CERTIFICATE';
  }

  const b64cert = pkBuffer.toString('base64');

  let PEMKey = '';
  for (let i = 0; i < Math.ceil(b64cert.length / 64); i++) {
    const start = 64 * i;
    PEMKey += b64cert.substr(start, 64) + '\n';
  }

  PEMKey = `-----BEGIN ${type}-----\n` + PEMKey + `-----END ${type}-----\n`;
  return PEMKey;
};
