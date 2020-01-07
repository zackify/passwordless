import { generateChallengeForLogin } from './login/login';
import { verify } from './verify/verify';

const verifyRegistration = async () => {
  let result = await verify({
    challenge:
      'qCPnZk8wijiHC5BtG2d1mzywYrwGsIxZ9I5qkgYzxk0vhuYalD66K2KnxG4E_KR7hrnqmN5vFOONYNDQdUVwDw',
    origin: 'http://localhost:3000',
    credential: {
      rawId:
        'OBevL9RdP3chxkXncHGqAQrI3a6iJDb8tjhrvAf5FjZf29G17EGhh-o8tuYhRs4YpdmjMTYk_FpmvF3HdxcRiA',
      response: {
        attestationObject:
          'o2NmbXRmcGFja2VkZ2F0dFN0bXSjY2FsZyZjc2lnWEcwRQIgMyDHdMj7wlwxkwoFSICv5hQkCajEbSnUY6abluYTfX8CIQCR5_WpkDQwbgZfE0u2IykTR67F7FTsp-7nBbmXGXwsp2N4NWOBWQLBMIICvTCCAaWgAwIBAgIEGKxGwDANBgkqhkiG9w0BAQsFADAuMSwwKgYDVQQDEyNZdWJpY28gVTJGIFJvb3QgQ0EgU2VyaWFsIDQ1NzIwMDYzMTAgFw0xNDA4MDEwMDAwMDBaGA8yMDUwMDkwNDAwMDAwMFowbjELMAkGA1UEBhMCU0UxEjAQBgNVBAoMCVl1YmljbyBBQjEiMCAGA1UECwwZQXV0aGVudGljYXRvciBBdHRlc3RhdGlvbjEnMCUGA1UEAwweWXViaWNvIFUyRiBFRSBTZXJpYWwgNDEzOTQzNDg4MFkwEwYHKoZIzj0CAQYIKoZIzj0DAQcDQgAEeeo7LHxJcBBiIwzSP-tg5SkxcdSD8QC-hZ1rD4OXAwG1Rs3Ubs_K4-PzD4Hp7WK9Jo1MHr03s7y-kqjCrutOOqNsMGowIgYJKwYBBAGCxAoCBBUxLjMuNi4xLjQuMS40MTQ4Mi4xLjcwEwYLKwYBBAGC5RwCAQEEBAMCBSAwIQYLKwYBBAGC5RwBAQQEEgQQy2lIHo_3QDmT7AonKaFUqDAMBgNVHRMBAf8EAjAAMA0GCSqGSIb3DQEBCwUAA4IBAQCXnQOX2GD4LuFdMRx5brr7Ivqn4ITZurTGG7tX8-a0wYpIN7hcPE7b5IND9Nal2bHO2orh_tSRKSFzBY5e4cvda9rAdVfGoOjTaCW6FZ5_ta2M2vgEhoz5Do8fiuoXwBa1XCp61JfIlPtx11PXm5pIS2w3bXI7mY0uHUMGvxAzta74zKXLslaLaSQibSKjWKt9h-SsXy4JGqcVefOlaQlJfXL1Tga6wcO0QTu6Xq-Uw7ZPNPnrpBrLauKDd202RlN4SP7ohL3d9bG6V5hUz_3OusNEBZUn5W3VmPj1ZnFavkMB3RkRMOa58MZAORJT4imAPzrvJ0vtv94_y71C6tZ5aGF1dGhEYXRhWMRJlg3liA6MaHQ0Fw9kdmBbj-SuuaKGMseZXPO6gx2XY0EAAAA4y2lIHo_3QDmT7AonKaFUqABAOBevL9RdP3chxkXncHGqAQrI3a6iJDb8tjhrvAf5FjZf29G17EGhh-o8tuYhRs4YpdmjMTYk_FpmvF3HdxcRiKUBAgMmIAEhWCDci_WEGOhLAfbV5xBBQRIglmlZnmCOFxRN4dpAQx5MAiJYIDvEv_TYgnjNllrLlCaBvi25mRANByThJqhwyTl7UES_',
        getTransports: {},
        clientDataJSON:
          'eyJjaGFsbGVuZ2UiOiJxQ1BuWms4d2lqaUhDNUJ0RzJkMW16eXdZcndHc0l4WjlJNXFrZ1l6eGswdmh1WWFsRDY2SzJLbnhHNEVfS1I3aHJucW1ONXZGT09OWU5EUWRVVndEdyIsImV4dHJhX2tleXNfbWF5X2JlX2FkZGVkX2hlcmUiOiJkbyBub3QgY29tcGFyZSBjbGllbnREYXRhSlNPTiBhZ2FpbnN0IGEgdGVtcGxhdGUuIFNlZSBodHRwczovL2dvby5nbC95YWJQZXgiLCJvcmlnaW4iOiJodHRwOi8vbG9jYWxob3N0OjMwMDAiLCJ0eXBlIjoid2ViYXV0aG4uY3JlYXRlIn0',
      },
      getClientExtensionResults: {},
      id:
        'OBevL9RdP3chxkXncHGqAQrI3a6iJDb8tjhrvAf5FjZf29G17EGhh-o8tuYhRs4YpdmjMTYk_FpmvF3HdxcRiA',
      type: 'public-key',
    },
  });

  console.log(result);
};
const setupLogin = async () => {
  let result = generateChallengeForLogin({
    credIDs: [
      'OBevL9RdP3chxkXncHGqAQrI3a6iJDb8tjhrvAf5FjZf29G17EGhh-o8tuYhRs4YpdmjMTYk_FpmvF3HdxcRiA',
    ],
  });

  console.log(result);
};

const verifyLogin = async () => {
  let result = verify({
    origin: 'http://localhost:3000',
    challenge:
      '4sQioQ-g92of8C_eRE5omIj9EUwgaF6b52-ewjAsNGJHA1Z9CCbJSj4XzQEOA8lWF9dgQvPn6PQMLHYgopJmnQ',
    credential: {
      rawId:
        'OBevL9RdP3chxkXncHGqAQrI3a6iJDb8tjhrvAf5FjZf29G17EGhh-o8tuYhRs4YpdmjMTYk_FpmvF3HdxcRiA',
      response: {
        authenticatorData: 'SZYN5YgOjGh0NBcPZHZgW4_krrmihjLHmVzzuoMdl2MBAAAAPQ',
        signature:
          'MEUCIQC3aJIc6pf4DO9Kc3KvUIoBqQyEwWN82jz7XNieReGO1QIgTXy6QT6NtQUTbhAwHzqapSnB5pSMmchaRPh8Gbb3tGs',
        userHandle: null,
        clientDataJSON:
          'eyJjaGFsbGVuZ2UiOiI0c1Fpb1EtZzkyb2Y4Q19lUkU1b21JajlFVXdnYUY2YjUyLWV3akFzTkdKSEExWjlDQ2JKU2o0WHpRRU9BOGxXRjlkZ1F2UG42UFFNTEhZZ29wSm1uUSIsImV4dHJhX2tleXNfbWF5X2JlX2FkZGVkX2hlcmUiOiJkbyBub3QgY29tcGFyZSBjbGllbnREYXRhSlNPTiBhZ2FpbnN0IGEgdGVtcGxhdGUuIFNlZSBodHRwczovL2dvby5nbC95YWJQZXgiLCJvcmlnaW4iOiJodHRwOi8vbG9jYWxob3N0OjMwMDAiLCJ0eXBlIjoid2ViYXV0aG4uZ2V0In0',
      },
      getClientExtensionResults: {},
      id:
        'OBevL9RdP3chxkXncHGqAQrI3a6iJDb8tjhrvAf5FjZf29G17EGhh-o8tuYhRs4YpdmjMTYk_FpmvF3HdxcRiA',
      type: 'public-key',
    },
    creds: [
      {
        fmt: 'fido-u2f',
        publicKey:
          'BNyL9YQY6EsB9tXnEEFBEiCWaVmeYI4XFE3h2kBDHkwCO8S_9NiCeM2WWsuUJoG-LbmZEA0HJOEmqHDJOXtQRL8',
        counter: 56,
        credID:
          'OBevL9RdP3chxkXncHGqAQrI3a6iJDb8tjhrvAf5FjZf29G17EGhh-o8tuYhRs4YpdmjMTYk_FpmvF3HdxcRiA',
      },
    ],
  });
  console.log(result);
};

//verifyRegistration();
//setupLogin();
verifyLogin();
