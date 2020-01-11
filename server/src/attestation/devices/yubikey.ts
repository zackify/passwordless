import { Certificate } from "@fidm/x509";

//https://developers.yubico.com/U2F/Attestation_and_Metadata/

const names: { [key: string]: string } = {
  "0410cb69481e8ff7403993ec0a2729a154a8": "Yubikey 5C",
  fa2b99dc9e3942578f924a30d23c4118: "YubiKey 5 NFC",
  c5ef55ffad9a4b9fb580adebafe026d0: "YubiKey 5Ci",
  "6d44ba9bf6ec2e49b9300c8fe920cb73": "Security Key NFC by Yubico"
};

export const yubikey = (pem: Certificate) => {
  let deviceExtension = pem.getExtension("1.3.6.1.4.1.45724.1.1.4");
  if (!deviceExtension) return null;

  let deviceHex = deviceExtension.value.toString("hex");
  return {
    name: names[deviceHex] || "Unknown Yubikey"
  };
};
