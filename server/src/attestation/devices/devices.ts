import { yubikey } from "./yubikey";
import { Certificate } from "@fidm/x509";

const devices = [yubikey];

export const deviceDataFromPEM = (pem: string) => {
  try {
    const parsedPem = Certificate.fromPEM((pem as unknown) as Buffer);
    // return the one that finds device data inside the pem
    for (let device of devices) {
      let deviceData = device(parsedPem);
      if (deviceData) return deviceData;
    }
  } catch (e) {
    console.log(pem);
    console.error(e);
    return {};
  }
};
