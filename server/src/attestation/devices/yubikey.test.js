import { verify } from "../../verify";

/*
I am only able to write tests for the devices I have.

If anyone else wants to add a test:
- run the example server / client
- Click register, touch your key
- Once complete, inside your browser console, copy the credential (looks like the part below)
- you can right click, store as global variable, then copy(temp1) in chrome
- Now add it here like the ones below, and put in the challenge value, and make sure device name is correct

*/
describe("Yubikey device data is parsed registration", () => {
  test("Yubikey 5 NFC", async () => {
    let credential = {
      rawId:
        "4BtnI5HPKWwiWqlXV6-zWfsSOpqfakj23sy9nLLQ9_dugQr_FCIr7iX4qwYLBzNc5ldsX5eos0kgBxzVLrG_hQ",
      response: {
        attestationObject:
          "o2NmbXRmcGFja2VkZ2F0dFN0bXSjY2FsZyZjc2lnWEcwRQIgBsXi9xbGBGcZzcX82DP6jRZcCJU_b04W6MSzNrucVtMCIQCOfwdR8hZDwq186Mau3jaGe5amZE22LaZ761A6ySMrOmN4NWOBWQLAMIICvDCCAaSgAwIBAgIEA63wEjANBgkqhkiG9w0BAQsFADAuMSwwKgYDVQQDEyNZdWJpY28gVTJGIFJvb3QgQ0EgU2VyaWFsIDQ1NzIwMDYzMTAgFw0xNDA4MDEwMDAwMDBaGA8yMDUwMDkwNDAwMDAwMFowbTELMAkGA1UEBhMCU0UxEjAQBgNVBAoMCVl1YmljbyBBQjEiMCAGA1UECwwZQXV0aGVudGljYXRvciBBdHRlc3RhdGlvbjEmMCQGA1UEAwwdWXViaWNvIFUyRiBFRSBTZXJpYWwgNjE3MzA4MzQwWTATBgcqhkjOPQIBBggqhkjOPQMBBwNCAAQZnoecFi233DnuSkKgRhalswn-ygkvdr4JSPltbpXK5MxlzVSgWc-9x8mzGysdbBhEecLAYfQYqpVLWWosHPoXo2wwajAiBgkrBgEEAYLECgIEFTEuMy42LjEuNC4xLjQxNDgyLjEuNzATBgsrBgEEAYLlHAIBAQQEAwIEMDAhBgsrBgEEAYLlHAEBBAQSBBD6K5ncnjlCV4-SSjDSPEEYMAwGA1UdEwEB_wQCMAAwDQYJKoZIhvcNAQELBQADggEBACjrs2f-0djw4onryp_22AdXxg6a5XyxcoybHDjKu72E2SN9qDGsIZSfDy38DDFr_bF1s25joiu7WA6tylKA0HmEDloeJXJiWjv7h2Az2_siqWnJOLic4XE1lAChJS2XAqkSk9VFGelg3SLOiifrBet-ebdQwAL-2QFrcR7JrXRQG9kUy76O2VcSgbdPROsHfOYeywarhalyVSZ-6OOYK_Q_DLIaOC0jXrnkzm2ymMQFQlBAIysrYeEM1wxiFbwDt-lAcbcOEtHEf5ZlWi75nUzlWn8bSx_5FO4TbZ5hIEcUiGRpiIBEMRZlOIm4ZIbZycn_vJOFRTVps0V0S4ygtDdoYXV0aERhdGFYxEmWDeWIDoxodDQXD2R2YFuP5K65ooYyx5lc87qDHZdjQQAAAC_6K5ncnjlCV4-SSjDSPEEYAEDgG2cjkc8pbCJaqVdXr7NZ-xI6mp9qSPbezL2cstD3926BCv8UIivuJfirBgsHM1zmV2xfl6izSSAHHNUusb-FpQECAyYgASFYIH5eCwFeKEl30WEch1c15VLbaCeYeTq1VqPLXGy7AH4RIlgg1r6piXl1GUJ1YTCZFdxeKqg9r4lwi7yKozCfXTGnTxQ",
        getTransports: {},
        clientDataJSON:
          "eyJjaGFsbGVuZ2UiOiJoOVpKN21aRlQ4OEpPWHJBdGVIcWFDWmJqVlVWTnppd1Fta1JGRGk1WDZEel9SV2Vwc2xKS0RVU2dLV2pndDJCc1FjM3Qwcm9WYkRRVGRTUHJIYXE0dyIsIm9yaWdpbiI6Imh0dHA6Ly9sb2NhbGhvc3Q6MzAwMSIsInR5cGUiOiJ3ZWJhdXRobi5jcmVhdGUifQ"
      },
      getClientExtensionResults: {},
      id:
        "4BtnI5HPKWwiWqlXV6-zWfsSOpqfakj23sy9nLLQ9_dugQr_FCIr7iX4qwYLBzNc5ldsX5eos0kgBxzVLrG_hQ",
      type: "public-key"
    };
    let verification = await verify({
      credential,
      origin: "http://localhost:3001",
      challenge:
        "h9ZJ7mZFT88JOXrAteHqaCZbjVUVNziwQmkRFDi5X6Dz_RWepslJKDUSgKWjgt2BsQc3t0roVbDQTdSPrHaq4w"
    });
    expect(verification.credential?.name).toEqual("YubiKey 5 NFC");
  });
  test("Yubikey 5C", async () => {
    //using the example server / client, i copied the json encoded credential response into this test
    let credential = {
      rawId:
        "t7G9XnDI287LtAqLL4kBfy3qYaGbIOuehpsGA119hPhOiZuI23lUMjHB9zED2nM5yxB577SbiNl6rs1ZY4g4sQ",
      response: {
        attestationObject:
          "o2NmbXRmcGFja2VkZ2F0dFN0bXSjY2FsZyZjc2lnWEcwRQIgD9S9gjHxNCDsxjQWlmaKcx9cGl6_0uiu9eh30yvNOvICIQCQ9KXceSRgs-YznIvjc2Hn1XyoQuHVUTzdsgDGPGj8H2N4NWOBWQLBMIICvTCCAaWgAwIBAgIEGKxGwDANBgkqhkiG9w0BAQsFADAuMSwwKgYDVQQDEyNZdWJpY28gVTJGIFJvb3QgQ0EgU2VyaWFsIDQ1NzIwMDYzMTAgFw0xNDA4MDEwMDAwMDBaGA8yMDUwMDkwNDAwMDAwMFowbjELMAkGA1UEBhMCU0UxEjAQBgNVBAoMCVl1YmljbyBBQjEiMCAGA1UECwwZQXV0aGVudGljYXRvciBBdHRlc3RhdGlvbjEnMCUGA1UEAwweWXViaWNvIFUyRiBFRSBTZXJpYWwgNDEzOTQzNDg4MFkwEwYHKoZIzj0CAQYIKoZIzj0DAQcDQgAEeeo7LHxJcBBiIwzSP-tg5SkxcdSD8QC-hZ1rD4OXAwG1Rs3Ubs_K4-PzD4Hp7WK9Jo1MHr03s7y-kqjCrutOOqNsMGowIgYJKwYBBAGCxAoCBBUxLjMuNi4xLjQuMS40MTQ4Mi4xLjcwEwYLKwYBBAGC5RwCAQEEBAMCBSAwIQYLKwYBBAGC5RwBAQQEEgQQy2lIHo_3QDmT7AonKaFUqDAMBgNVHRMBAf8EAjAAMA0GCSqGSIb3DQEBCwUAA4IBAQCXnQOX2GD4LuFdMRx5brr7Ivqn4ITZurTGG7tX8-a0wYpIN7hcPE7b5IND9Nal2bHO2orh_tSRKSFzBY5e4cvda9rAdVfGoOjTaCW6FZ5_ta2M2vgEhoz5Do8fiuoXwBa1XCp61JfIlPtx11PXm5pIS2w3bXI7mY0uHUMGvxAzta74zKXLslaLaSQibSKjWKt9h-SsXy4JGqcVefOlaQlJfXL1Tga6wcO0QTu6Xq-Uw7ZPNPnrpBrLauKDd202RlN4SP7ohL3d9bG6V5hUz_3OusNEBZUn5W3VmPj1ZnFavkMB3RkRMOa58MZAORJT4imAPzrvJ0vtv94_y71C6tZ5aGF1dGhEYXRhWMRJlg3liA6MaHQ0Fw9kdmBbj-SuuaKGMseZXPO6gx2XY0UAAAEyy2lIHo_3QDmT7AonKaFUqABAt7G9XnDI287LtAqLL4kBfy3qYaGbIOuehpsGA119hPhOiZuI23lUMjHB9zED2nM5yxB577SbiNl6rs1ZY4g4saUBAgMmIAEhWCDRJVS06vbKy2TKTB1cb8rZS6V26DNWzPNhJuJINVGBDyJYIEpKb0rlz51M0rgRGjruIFu0sMQqRP4oTcxFfCqkElTX",
        getTransports: {},
        clientDataJSON:
          "eyJjaGFsbGVuZ2UiOiJPUTNvYzlhb2x5U0NiZzBoeDg5UGNtcUZUeEhrNVpHVUZpOUEtZmJtYV8tQzJQZkh4UHpsR0RPNkc0TE9oc2IwNzBseXZGZW9hb0ZuVkdRQUdIR21JdyIsImV4dHJhX2tleXNfbWF5X2JlX2FkZGVkX2hlcmUiOiJkbyBub3QgY29tcGFyZSBjbGllbnREYXRhSlNPTiBhZ2FpbnN0IGEgdGVtcGxhdGUuIFNlZSBodHRwczovL2dvby5nbC95YWJQZXgiLCJvcmlnaW4iOiJodHRwOi8vbG9jYWxob3N0OjMwMDEiLCJ0eXBlIjoid2ViYXV0aG4uY3JlYXRlIn0"
      },
      getClientExtensionResults: {},
      id:
        "t7G9XnDI287LtAqLL4kBfy3qYaGbIOuehpsGA119hPhOiZuI23lUMjHB9zED2nM5yxB577SbiNl6rs1ZY4g4sQ",
      type: "public-key"
    };

    let verification = await verify({
      credential,
      origin: "http://localhost:3001",
      challenge:
        "OQ3oc9aolySCbg0hx89PcmqFTxHk5ZGUFi9A-fbma_-C2PfHxPzlGDO6G4LOhsb070lyvFeoaoFnVGQAGHGmIw"
    });
    expect(verification.credential?.name).toEqual(
      "YubiKey 5 Series security key"
    );
  });

  test("Newer Yubikey 5C", async () => {
    //using the example server / client, i copied the json encoded credential response into this test
    let credential = {
      rawId:
        "Xa_n7ugy56yZ6ho_A7pV8tQ2hEJawcIWButhW3fWU4tsCmYweU5dpFhPW1Z0LfLNEVEFiQzTHjdCBVHXf2J5Yg",
      response: {
        attestationObject:
          "o2NmbXRoZmlkby11MmZnYXR0U3RtdKJjc2lnWEgwRgIhAMFOCkXVinElB6UDRWJSsuHeibAUZer6hQ0AsX3zw9uIAiEArSx5aAU-VTscr0v_LLqt4AQ35XpFtBVGmmshC_xE-NZjeDVjgVkCwjCCAr4wggGmoAMCAQICBFZmM30wDQYJKoZIhvcNAQELBQAwLjEsMCoGA1UEAxMjWXViaWNvIFUyRiBSb290IENBIFNlcmlhbCA0NTcyMDA2MzEwIBcNMTQwODAxMDAwMDAwWhgPMjA1MDA5MDQwMDAwMDBaMG8xCzAJBgNVBAYTAlNFMRIwEAYDVQQKDAlZdWJpY28gQUIxIjAgBgNVBAsMGUF1dGhlbnRpY2F0b3IgQXR0ZXN0YXRpb24xKDAmBgNVBAMMH1l1YmljbyBVMkYgRUUgU2VyaWFsIDE0NDk1Mzg0MjkwWTATBgcqhkjOPQIBBggqhkjOPQMBBwNCAAT_sayZX-lwzDJwPW0ZKPNi2oen84IgHGm8DTpl1bazdUv6SIxVbrvu0r2QktcMbnDVUQAPHimn4HU-seUaKxIto2wwajAiBgkrBgEEAYLECgIEFTEuMy42LjEuNC4xLjQxNDgyLjEuNzATBgsrBgEEAYLlHAIBAQQEAwIFIDAhBgsrBgEEAYLlHAEBBAQSBBDuiCh5chxJE5d1PfzOlwcqMAwGA1UdEwEB_wQCMAAwDQYJKoZIhvcNAQELBQADggEBAEQYt7eJNOrUqHRaTjaYRvOqV7XRsbNEyTLnrkMVXndB36k-yNmN9kSUNs-lZuCIQEexWUp9IWGdHGUIb56vDxW8jWOnzPrdVgjK1yfEmQix-GjjGIM9CPOX5D6ZJWm4mLjTD9cO8IC0qEaMFH8LAuJlsDbBW3IVuHcT5_n9B_W54xvteleJuJq4hdsZyPy7q4HuSQhK22MFX71CwvPp6uaBR_JhbaShiQCvJjgibLki16iyk-fuohoxHCdRPOiScRFtb9kilDd6_QHFoxP0BPlKOZXRPMedmF7A17lxZjh7aLPIDfkABhS2d8e8djeZ9R_4nn4hAFuZFXmRXmU5Q9toYXV0aERhdGFYxEmWDeWIDoxodDQXD2R2YFuP5K65ooYyx5lc87qDHZdjQQAAAAAAAAAAAAAAAAAAAAAAAAAAAEBdr-fu6DLnrJnqGj8DulXy1DaEQlrBwhYG62Fbd9ZTi2wKZjB5Tl2kWE9bVnQt8s0RUQWJDNMeN0IFUdd_YnlipQECAyYgASFYIJ76DaFAqv_7unG1ICUmuprHfi8LlzRJJ86Ot4t9v7MLIlggF_ddRk40Vrz7Aan8f0qvdNxGgwqvbjE5lrqcQ3EayiQ",
        getTransports: {},
        clientDataJSON:
          "eyJjaGFsbGVuZ2UiOiJqT2pHM0FxVkJqdXdLeGlrUzA3c09fdWVsRlowRjFsZndTeEM4NUJGN2QzNmV1ZlBUVU9vTzdkN1d2QjEzV3cwZlJyc1FJRTlQUkNPcVlhMXNBSzB4dyIsIm9yaWdpbiI6Imh0dHA6Ly9sb2NhbGhvc3Q6MzAwMSIsInR5cGUiOiJ3ZWJhdXRobi5jcmVhdGUifQ"
      },
      getClientExtensionResults: {},
      id:
        "Xa_n7ugy56yZ6ho_A7pV8tQ2hEJawcIWButhW3fWU4tsCmYweU5dpFhPW1Z0LfLNEVEFiQzTHjdCBVHXf2J5Yg",
      type: "public-key"
    };
    let verification = await verify({
      credential,
      origin: "http://localhost:3001",
      challenge:
        "jOjG3AqVBjuwKxikS07sO_uelFZ0F1lfwSxC85BF7d36eufPTUOoO7d7WvB13Ww0fRrsQIE9PRCOqYa1sAK0xw"
    });
    expect(verification.credential?.name).toEqual(
      "YubiKey 5 Series security key"
    );
  });
});
