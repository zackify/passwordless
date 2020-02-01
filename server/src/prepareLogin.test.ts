import { prepareLogin } from "./prepareLogin";

test("Prepare Login returns creds", () => {
  let result = prepareLogin({
    credIds: ["id1", "id2"],
    authenticatorSelection: {
      userVerification: "discouraged",
      authenticatorAttachment: "cross-platform"
    }
  });
  //challenge is random, cant expect it to equal an exact value
  let challenge = result.challenge;
  expect(challenge.length).toEqual(86);
  delete result.challenge;

  expect(result).toEqual({
    allowCredentials: [
      { id: "id1", type: "public-key" },
      { id: "id2", type: "public-key" }
    ],
    authenticatorSelection: {
      authenticatorAttachment: "cross-platform",
      userVerification: "discouraged"
    }
  });
});
