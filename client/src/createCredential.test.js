import { createCredential } from "./createCredential";

test("createCredential fails when PublicKeyCredential is not on the window", async () => {
  let response = await createCredential({});

  expect(response.reason).toEqual("unsupported");
  expect(response.message).toEqual(
    "Your browser doesn't support hardware authentication, please update it"
  );
});
