import { Certificate } from "@fidm/x509";
//https://developers.yubico.com/U2F/Attestation_and_Metadata/

const extensionToString = (
  pem: Certificate,
  extension: string,
  type?: string
) => {
  try {
    let ext = pem.getExtension(extension);
    return ext.value.toString(type);
  } catch (e) {
    return null;
  }
};

// this information is provided by yubico
// https://developers.yubico.com/U2F/yubico-metadata.json
const deviceNameParsers: ((pem: Certificate) => string | void)[] = [
  pem => {
    let fiveSeries = extensionToString(pem, "1.3.6.1.4.1.45724.1.1.4", "hex");

    if (fiveSeries === "0410fa2b99dc9e3942578f924a30d23c4118")
      return "YubiKey 5 NFC";

    if (fiveSeries === "0410cb69481e8ff7403993ec0a2729a154a8")
      return "YubiKey 5 Series security key";

    if (fiveSeries === "04106d44ba9bf6ec2e49b9300c8fe920cb73")
      return "Security Key NFC by Yubico";

    if (fiveSeries === "0410c5ef55ffad9a4b9fb580adebafe026d0")
      return "YubiKey 5Ci";
  }
];

export const yubikey = (pem: Certificate) => {
  let name = deviceNameParsers.find(device => device(pem));
  if (!name) return null;

  return {
    name: name(pem)
  };
};
