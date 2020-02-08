import { getCredential } from "./getCredential";

test("getCredential fails when PublicKeyCredential is not on the window", async () => {
  let response = await getCredential({});

  expect(response.reason).toEqual("unsupported");
  expect(response.message).toEqual(
    "Your browser doesn't support hardware authentication, please update it"
  );
});

test("getCredential calls navigation.credentials.get correctly", () => {
  let spy = jest.fn();
  navigator.credentials = {
    get: spy
  };
  //mock the window password credential
  window.PublicKeyCredential = true;
  getCredential({
    authenticatorSelection: {
      userVerification: "preferred",
      authenticatorAttachment: "cross-platform"
    },
    challenge:
      "MVobTbXzilTSOUuxM-ASo9USA7m766_UJxmNZVH-zimDSJ2dmEAB8iuqkPZ3LlPdXYHoqbEVrV7K1y2WovFlmw",
    allowCredentials: [
      {
        type: "public-key",
        id:
          "14qc46TWvxrnokphqIXEJBjMJc6vggL1zWA7cSFBphW39V_XS454QEWOn_p12C4WJjpAsTkQqfkV6JicNg2F2Q"
      }
    ]
  });
  let dataPassedToNavigator = spy.mock.calls[0][0];
  let creds = dataPassedToNavigator.publicKey.allowCredentials;
  expect(
    dataPassedToNavigator.publicKey.challenge instanceof ArrayBuffer
  ).toEqual(true);

  expect(creds[0].id instanceof ArrayBuffer).toEqual(true);

  //we confirms it is an arraybuffer, now delete it and expect the rest of the correct data
  delete creds[0].id;
  expect(creds[0]).toEqual({
    type: "public-key"
  });
});
