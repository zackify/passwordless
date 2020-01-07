import { credentialToJSON } from './credentialToJSON';
import { decode } from './base64';

const defaultPublicKeyOptions: Partial<PublicKeyCredentialCreationOptions> = {
  pubKeyCredParams: [{ alg: -7, type: 'public-key' }],
  authenticatorSelection: {
    userVerification: 'preferred',
    authenticatorAttachment: 'cross-platform',
  },
  timeout: 60000,
  attestation: 'direct',
};

type Props = Partial<Omit<PublicKeyCredentialCreationOptions, 'challenge'>> & {
  challenge: string;
  rp: PublicKeyCredentialCreationOptions['rp'];
  user: PublicKeyCredentialCreationOptions['user'];
};

export const askForCredential = async ({
  challenge,
  rp,
  ...publicKey
}: Props) => {
  const credential = await navigator.credentials.create({
    publicKey: {
      challenge: decode(challenge),
      ...defaultPublicKeyOptions,
      ...publicKey,
      rp,
    } as PublicKeyCredentialCreationOptions,
  });

  return credentialToJSON(credential);
};
