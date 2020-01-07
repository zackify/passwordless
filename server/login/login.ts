import { generateChallenge } from '../generateChallenge';

type Props = {
  credIDs: string[];
};

export const generateChallengeForLogin = ({ credIDs }: Props) => {
  return {
    challenge: generateChallenge(),
    allowCredentials: credIDs.map(id => ({
      type: 'public-key',
      id,
      transports: ['usb', 'nfc', 'ble'],
    })),
  };
};
