import { verifyAttestation } from "../verifyAttestation";

// Would love some help getting in-depth coverage on these attestations :)
describe("Fido U2F Attestation", () => {
  test("Verifies a valid credential", async () => {
    let credential = {
      rawId:
        "AdIZuYF-YRJ_QPdqSR5GZ3RP8Tvt46k4JTdzLozZTQVippBL2CJY3oVApcdopZSFK3YzXv7YGxsZR8ljCPF8rZw4kadb88VtpeZzwUaoTbuctg",
      response: {
        attestationObject:
          "o2NmbXRmcGFja2VkZ2F0dFN0bXSiY2FsZyZjc2lnWEYwRAIgcGgkAYKsH3cgLEuSJ7skN7OD-3zI7KRQ5SfuAoDmo3YCIGh8g4xpGiSfxxJgdvuwwHBjG2HKn5mft5OdK9APBz6faGF1dGhEYXRhWNZ5rtcuu-Irw1x_PSHAJ-EId9sN8qyG4hTgCLETxozIvEVeL5Zrrc4AAjW8xgpkiwsl8fBVAwBSAdIZuYF-YRJ_QPdqSR5GZ3RP8Tvt46k4JTdzLozZTQVippBL2CJY3oVApcdopZSFK3YzXv7YGxsZR8ljCPF8rZw4kadb88VtpeZzwUaoTbuctqUBAgMmIAEhWCC0nDs7aGSdVjGMy6yL-GCcy7l7_sR4aRvsdlgGKTpI0CJYIB1sGjWAxepeascSofcA2AJu70q49eMOXFV-8nBHPUZ1",
        getTransports: {},
        clientDataJSON:
          "eyJjaGFsbGVuZ2UiOiI1dGVES0xORGhEQWlWR1djUG5KN1AtRmJHMVBsSldScHlpSUlWSEJZRnVVOGJwRDA0eXljRFdaZ3BLODF4c3BwZEdJcWh3Q2FCMU1tRHVyeDYzVUpOZyIsImV4dHJhX2tleXNfbWF5X2JlX2FkZGVkX2hlcmUiOiJkbyBub3QgY29tcGFyZSBjbGllbnREYXRhSlNPTiBhZ2FpbnN0IGEgdGVtcGxhdGUuIFNlZSBodHRwczovL2dvby5nbC95YWJQZXgiLCJvcmlnaW4iOiJodHRwczovL3Bhc3N3b3JkbGVzcy5hcHAiLCJ0eXBlIjoid2ViYXV0aG4uY3JlYXRlIn0"
      },
      getClientExtensionResults: {},
      id:
        "AdIZuYF-YRJ_QPdqSR5GZ3RP8Tvt46k4JTdzLozZTQVippBL2CJY3oVApcdopZSFK3YzXv7YGxsZR8ljCPF8rZw4kadb88VtpeZzwUaoTbuctg",
      type: "public-key"
    };
    let verification = await verifyAttestation(credential);

    //console.log(verification);
  });
});
