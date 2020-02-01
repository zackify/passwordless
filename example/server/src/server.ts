import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import {
  prepareRegistration,
  prepareLogin,
  verify
} from "@passwordless/server";
import { DeviceCredential } from "@passwordless/server/module/verify";
import { RegistrationCredential } from "@passwordless/server/module/verifyRegistration";

const app = express();
app.use(cors());
app.use(bodyParser.json());

let challenge: string;
let creds: DeviceCredential[] = [];

app.get("/prepare-registration/:user", async (req, res) => {
  //if this user is registering a key and already logged in, its up to you to
  // set the name and displayName values based on
  // a user session or other method you use for managing auth
  let publicKeyOptions = await prepareRegistration({
    //change this to none if you dont want to receive device info
    attestation: "direct",
    user: {
      id: "test",
      displayName: "Bob Jones",
      name: "bob"
    },
    //relaying party AKA us (the server)
    rp: {
      name: "Local Test",
      id: "localhost"
    },
    authenticatorSelection: {
      userVerification: "preferred",
      authenticatorAttachment: "cross-platform"
    }
  });
  challenge = publicKeyOptions.challenge;
  res.send(publicKeyOptions);
});

app.get("/prepare-login/:user", (req, res) => {
  //creds array would be found in a database by the user's name
  let result = prepareLogin({
    credIDs: creds.map(cred => cred.id),
    authenticatorSelection: {
      userVerification: "discouraged",
      authenticatorAttachment: "cross-platform"
    }
  });
  challenge = result.challenge;
  res.send(result);
});

app.post("/verify-credential", async (req, res) => {
  let result = await verify({
    challenge,
    creds,
    origin: "http://localhost:3001",
    credential: (req.body.credential as unknown) as RegistrationCredential
  });
  if (result.credential) creds.push(result.credential);
  res.send(result);
});

app.listen(3000, () => console.log(`Example app listening on port 3000!`));
