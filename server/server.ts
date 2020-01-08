import { generateLoginData } from "./src/base/generateLoginData";
import { verify } from "./src/base/verify/verify";
import { generateRegistrationData } from "./src/base/generateRegistrationData";
import jwt from "jsonwebtoken";

const verifyRegistration = async () => {
  let result = await verify({
    challenge:
      "qCPnZk8wijiHC5BtG2d1mzywYrwGsIxZ9I5qkgYzxk0vhuYalD66K2KnxG4E_KR7hrnqmN5vFOONYNDQdUVwDw",
    origin: "http://localhost:3000",
    credential: {
      rawId:
        "OBevL9RdP3chxkXncHGqAQrI3a6iJDb8tjhrvAf5FjZf29G17EGhh-o8tuYhRs4YpdmjMTYk_FpmvF3HdxcRiA",
      response: {
        attestationObject:
          "o2NmbXRmcGFja2VkZ2F0dFN0bXSjY2FsZyZjc2lnWEcwRQIgMyDHdMj7wlwxkwoFSICv5hQkCajEbSnUY6abluYTfX8CIQCR5_WpkDQwbgZfE0u2IykTR67F7FTsp-7nBbmXGXwsp2N4NWOBWQLBMIICvTCCAaWgAwIBAgIEGKxGwDANBgkqhkiG9w0BAQsFADAuMSwwKgYDVQQDEyNZdWJpY28gVTJGIFJvb3QgQ0EgU2VyaWFsIDQ1NzIwMDYzMTAgFw0xNDA4MDEwMDAwMDBaGA8yMDUwMDkwNDAwMDAwMFowbjELMAkGA1UEBhMCU0UxEjAQBgNVBAoMCVl1YmljbyBBQjEiMCAGA1UECwwZQXV0aGVudGljYXRvciBBdHRlc3RhdGlvbjEnMCUGA1UEAwweWXViaWNvIFUyRiBFRSBTZXJpYWwgNDEzOTQzNDg4MFkwEwYHKoZIzj0CAQYIKoZIzj0DAQcDQgAEeeo7LHxJcBBiIwzSP-tg5SkxcdSD8QC-hZ1rD4OXAwG1Rs3Ubs_K4-PzD4Hp7WK9Jo1MHr03s7y-kqjCrutOOqNsMGowIgYJKwYBBAGCxAoCBBUxLjMuNi4xLjQuMS40MTQ4Mi4xLjcwEwYLKwYBBAGC5RwCAQEEBAMCBSAwIQYLKwYBBAGC5RwBAQQEEgQQy2lIHo_3QDmT7AonKaFUqDAMBgNVHRMBAf8EAjAAMA0GCSqGSIb3DQEBCwUAA4IBAQCXnQOX2GD4LuFdMRx5brr7Ivqn4ITZurTGG7tX8-a0wYpIN7hcPE7b5IND9Nal2bHO2orh_tSRKSFzBY5e4cvda9rAdVfGoOjTaCW6FZ5_ta2M2vgEhoz5Do8fiuoXwBa1XCp61JfIlPtx11PXm5pIS2w3bXI7mY0uHUMGvxAzta74zKXLslaLaSQibSKjWKt9h-SsXy4JGqcVefOlaQlJfXL1Tga6wcO0QTu6Xq-Uw7ZPNPnrpBrLauKDd202RlN4SP7ohL3d9bG6V5hUz_3OusNEBZUn5W3VmPj1ZnFavkMB3RkRMOa58MZAORJT4imAPzrvJ0vtv94_y71C6tZ5aGF1dGhEYXRhWMRJlg3liA6MaHQ0Fw9kdmBbj-SuuaKGMseZXPO6gx2XY0EAAAA4y2lIHo_3QDmT7AonKaFUqABAOBevL9RdP3chxkXncHGqAQrI3a6iJDb8tjhrvAf5FjZf29G17EGhh-o8tuYhRs4YpdmjMTYk_FpmvF3HdxcRiKUBAgMmIAEhWCDci_WEGOhLAfbV5xBBQRIglmlZnmCOFxRN4dpAQx5MAiJYIDvEv_TYgnjNllrLlCaBvi25mRANByThJqhwyTl7UES_",
        getTransports: {},
        clientDataJSON:
          "eyJjaGFsbGVuZ2UiOiJxQ1BuWms4d2lqaUhDNUJ0RzJkMW16eXdZcndHc0l4WjlJNXFrZ1l6eGswdmh1WWFsRDY2SzJLbnhHNEVfS1I3aHJucW1ONXZGT09OWU5EUWRVVndEdyIsImV4dHJhX2tleXNfbWF5X2JlX2FkZGVkX2hlcmUiOiJkbyBub3QgY29tcGFyZSBjbGllbnREYXRhSlNPTiBhZ2FpbnN0IGEgdGVtcGxhdGUuIFNlZSBodHRwczovL2dvby5nbC95YWJQZXgiLCJvcmlnaW4iOiJodHRwOi8vbG9jYWxob3N0OjMwMDAiLCJ0eXBlIjoid2ViYXV0aG4uY3JlYXRlIn0"
      },
      getClientExtensionResults: {},
      id:
        "OBevL9RdP3chxkXncHGqAQrI3a6iJDb8tjhrvAf5FjZf29G17EGhh-o8tuYhRs4YpdmjMTYk_FpmvF3HdxcRiA",
      type: "public-key"
    }
  });

  console.log(result);
};
const setupLogin = async () => {
  let result = generateLoginData({
    credIDs: [
      "OBevL9RdP3chxkXncHGqAQrI3a6iJDb8tjhrvAf5FjZf29G17EGhh-o8tuYhRs4YpdmjMTYk_FpmvF3HdxcRiA"
    ]
  });

  console.log(result);
};

const verifyLogin = async () => {
  let result = verify({
    origin: "http://localhost:3000",
    challenge:
      "4sQioQ-g92of8C_eRE5omIj9EUwgaF6b52-ewjAsNGJHA1Z9CCbJSj4XzQEOA8lWF9dgQvPn6PQMLHYgopJmnQ",
    credential: {
      rawId:
        "OBevL9RdP3chxkXncHGqAQrI3a6iJDb8tjhrvAf5FjZf29G17EGhh-o8tuYhRs4YpdmjMTYk_FpmvF3HdxcRiA",
      response: {
        authenticatorData: "SZYN5YgOjGh0NBcPZHZgW4_krrmihjLHmVzzuoMdl2MBAAAAPQ",
        signature:
          "MEUCIQC3aJIc6pf4DO9Kc3KvUIoBqQyEwWN82jz7XNieReGO1QIgTXy6QT6NtQUTbhAwHzqapSnB5pSMmchaRPh8Gbb3tGs",
        userHandle: null,
        clientDataJSON:
          "eyJjaGFsbGVuZ2UiOiI0c1Fpb1EtZzkyb2Y4Q19lUkU1b21JajlFVXdnYUY2YjUyLWV3akFzTkdKSEExWjlDQ2JKU2o0WHpRRU9BOGxXRjlkZ1F2UG42UFFNTEhZZ29wSm1uUSIsImV4dHJhX2tleXNfbWF5X2JlX2FkZGVkX2hlcmUiOiJkbyBub3QgY29tcGFyZSBjbGllbnREYXRhSlNPTiBhZ2FpbnN0IGEgdGVtcGxhdGUuIFNlZSBodHRwczovL2dvby5nbC95YWJQZXgiLCJvcmlnaW4iOiJodHRwOi8vbG9jYWxob3N0OjMwMDAiLCJ0eXBlIjoid2ViYXV0aG4uZ2V0In0"
      },
      getClientExtensionResults: {},
      id:
        "OBevL9RdP3chxkXncHGqAQrI3a6iJDb8tjhrvAf5FjZf29G17EGhh-o8tuYhRs4YpdmjMTYk_FpmvF3HdxcRiA",
      type: "public-key"
    },
    creds: [
      {
        fmt: "fido-u2f",
        publicKey:
          "BNyL9YQY6EsB9tXnEEFBEiCWaVmeYI4XFE3h2kBDHkwCO8S_9NiCeM2WWsuUJoG-LbmZEA0HJOEmqHDJOXtQRL8",
        counter: 56,
        credID:
          "OBevL9RdP3chxkXncHGqAQrI3a6iJDb8tjhrvAf5FjZf29G17EGhh-o8tuYhRs4YpdmjMTYk_FpmvF3HdxcRiA"
      }
    ]
  });
  console.log(result);
};

const privateKey = `
-----BEGIN PRIVATE KEY-----
MIIEvgIBADANBgkqhkiG9w0BAQEFAASCBKgwggSkAgEAAoIBAQCqCL78+zAMNJGG
5wkYEuSAr5Es/Q3XDh1x8QK+KH2322TJ3V4xs4ad9s1kR1B5jDPTXKMdHnPrB8Sf
rHsceknKTW0uwvVSFQJmyj+b9FF7TdPmkX4nehesJpWbsJs8esPC2cUrxknbuW3D
VAVPXK7ORq3uV7etfgNc93UDXZWvb+gfNXx+a8dGnKTecD9CKQj11E7UJ1KasflL
70TOXhoOTcrEX+A4k9Wj9tIKKrjBYVqKbdPTLAbX6nK1P6UpbmKXTNGlyWHVZhQ6
NO5RxsgY4BztltZ5/MEOEs1njJFKmcmKawCcob4i43UmXHV99bTJ5SP/ylgHA76H
oDvY6T35AgMBAAECggEBAJaKDcXfAmgb9qgQTq3gtCv2xLqnBKTdG1awwfPn1357
IJ3UfrvULSAXzTq2JNqoNY4xGz0BpDF2/C8+PvU0k7YnnL3k39ufPDQTZgPGaImZ
mz0snRuIbgL9WkGwN5BxRHZz5axe7y842aQw9E6SSTXZv84gHT/eLE4XzKKBLbBX
Gqb0jcGwW5BPIhFUC12Xm/3WgNG+9U34uqAceTnK8oALtlP/7qiMfEejNlMu70t7
KZhxsNJo/r22oW7HKup+QNt/jTtqhq1QKlEzlS4Vbyv+FBcbNkmJUUvAALcTmt6x
pkQQzOk+exuAMksAeiSCSnMJNvpR+g5zWWzLYTJC1K0CgYEA27VwquHq6ACIhYWd
MymF9Pa2ftuy8X1bAGzqXorLMg5nWMYNrkimeT9IUylc6gJOYEeu1oQkpysl14a8
LgBhEUIBokFhG6GVV44vQUc3vIsnt3m6O8RXXJ+iVhN/gSYuyIu9Az8yabdSrgXW
8uh9Ne4e5Wd01uKsH1MrIT60sK8CgYEAxh7GwujKotElxfvAeVFnCVSmiwpCGFaY
PKQPgSkqwRb/DLLX1TzxdL9KIpFPndvuaQSbBpdY8EJCdqcPp7QCMqPClKPSm8Ux
Ymrmni208YZq0ag6GSRmH9UowVBDmt+MUKNNMIgAI+stmtaLudzH14fB4GQipAjx
EsTYyiedldcCgYBteHQQ0MwImOttC+wNp+zU53B6uODqLjl/dsU4IhOod0DLHLOI
WS6JTxysQvnGpyuCEXVt8R2KJZePUdTFXu7+eFL0E3tdFx+gJnopHmEJEpTReFdw
nB2jSu7J0KFBKlM5HVcqHPzza6JIjyRQl8J7co/2YZv3za1RVlExGVtShQKBgQDE
MQf9TdAUye6RD4v714ukZsqB18e6GE6rhn/AFQc8rUwmxBgOF0q4pRGCB8oC9h8y
qhfmwAuX6NWucCOFnDGs+hQfY9eU4ALWhiwYKgUMRGMVeXUHHs9u6IRyYsx/2q41
0HEJBTS2XRcNRTaa+LKBkfOBBUh0jlJEluBj2DUqgwKBgDX3Fh4Ql685lroFJBZZ
WubmiQmGwRp3I83UVSwf7/WXgRygIeYz7kA0FkN/yZmwTmbtMU9PsmE+NYbTbVZd
9iShYlA5YNgzw1iXMEy7aGeAKfzLBxwV5C0fBzx19wY1DrAqKdQlMO8LXhzaZE4+
epNnYtJf8pUUlgG1dH/Jd94W
-----END PRIVATE KEY-----
`;

const publicKey = `
-----BEGIN PUBLIC KEY-----
MIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEAqgi+/PswDDSRhucJGBLk
gK+RLP0N1w4dcfECvih9t9tkyd1eMbOGnfbNZEdQeYwz01yjHR5z6wfEn6x7HHpJ
yk1tLsL1UhUCZso/m/RRe03T5pF+J3oXrCaVm7CbPHrDwtnFK8ZJ27ltw1QFT1yu
zkat7le3rX4DXPd1A12Vr2/oHzV8fmvHRpyk3nA/QikI9dRO1CdSmrH5S+9Ezl4a
Dk3KxF/gOJPVo/bSCiq4wWFaim3T0ywG1+pytT+lKW5il0zRpclh1WYUOjTuUcbI
GOAc7ZbWefzBDhLNZ4yRSpnJimsAnKG+IuN1Jlx1ffW0yeUj/8pYBwO+h6A72Ok9
+QIDAQAB
-----END PUBLIC KEY-----
`;

const generateRegisterStuff = async () => {
  let publicKeyOptions = await generateRegistrationData({
    username: "Bob",
    rp: {
      name: "Local Test",
      id: "localhost"
    },
    createChallengeToken: async challenge =>
      jwt.sign({ challenge }, privateKey, { algorithm: "RS512" })
  });
  let challengeToken = await jwt.sign(
    { challenge: publicKeyOptions.challenge },
    privateKey,
    { algorithm: "RS512" }
  );
  let verify = await jwt.verify(challengeToken, publicKey);

  console.log(challengeToken, verify, publicKeyOptions);
};
verifyRegistration();
//setupLogin();
//verifyLogin();
//generateRegisterStuff();
