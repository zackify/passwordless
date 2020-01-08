import cbor from 'cbor';

export const COSEECDHAtoPKCS = (COSEPublicKey: any) => {
  const coseStruct = cbor.decodeAllSync(COSEPublicKey)[0];
  const tag = Buffer.from([0x04]);
  const x = coseStruct.get(-2);
  const y = coseStruct.get(-3);

  return Buffer.concat([tag, x, y]);
};
