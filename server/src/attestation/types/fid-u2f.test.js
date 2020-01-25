import { verifyAttestation } from "../verifyAttestation";

// Would love some help getting in-depth coverage on these attestations :)
describe("Fido U2F Attestation", () => {
  test("Verifies a valid credential", async () => {
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
    let verification = await verifyAttestation(credential);

    expect(verification.authrInfo.fmt).toEqual("fido-u2f");
    expect(verification.authrInfo.counter).toEqual(47);
    expect(verification.verified).toEqual(true);
  });

  test("Verifies a invalid credential", async () => {
    let credential = {
      rawId:
        "4BtnI5HPKWwiWqlXV6-zWfsSOpqfakj23sy9nLLQ9_dugQr_FCIr7iX4qwYLBzNc5ldsX5eos0kgBxzVLrG_hQ",
      response: {
        attestationObject:
          "o2NmbXRmcGFja2VkZ2F0dFN0bXSjY2FsZyZjc2lnWEcwRQIgBsXi9xbGBGcZzcX82DP6jRZcCJU_b04W6MSzNrucVtMCIQCOfwdR8hZDwq186Mau3jaGe5amZE22LaZ761A6ySMrOmN4NWOBWQLAMIICvDCCAaSgAwIBAgIEA63wEjANBgkqhkiG9w0BAQsFADAuMSwwKgYDVQQDEyNZdWJpY28gVTJGIFJvb3QgQ0EgU2VyaWFsIDQ1NzIwMDYzMTAgFw0xNDA4MDEwMDAwMDBaGA8yMDUwMDkwNDAwMDAwMFowbTELMAkGA1UEBhMCU0UxEjAQBgNVBAoMCVl1YmljbyBBQjEiMCAGA1UECwwZQXV0aGVudGljYXRvciBBdHRlc3RhdGlvbjEmMCQGA1UEAwwdWXViaWNvIFUyRiBFRSBTZXJpYWwgNjE3MzA4MzQwWTATBgcqhkjOPQIBBggqhkjOPQMBBwNCAAQZnoecFi233DnuSkKgRhalswn-ygkvdr4JSPltbpXK5MxlzVSgWc-9x8mzGysdbBhEecLAYfQYqpVLWWosHPoXo2wwajAiBgkrBgEEAYLECgIEFTEuMy42LjEuNC4xLjQxNDgyLjEuNzATBgsrBgEEAYLlHAIBAQQEAwIEMDAhBgsrBgEEAYLlHAEBBAQSBBD6K5ncnjlCV4-SSjDSPEEYMAwGA1UdEwEB_wQCMAAwDQYJKoZIhvcNAQELBQADggEBACjrs2f-0djw4onryp_22AdXxg6a5XyxcoybHDjKu72E2SN9qDGsIZSfDy38DDFr_bF1s25joiu7WA6tylKA0HmEDloeJXJiWjv7h2Az2_siqWnJOLic4XE1lAChJS2XAqkSk9VFGelg3SLOiifrBet-ebdQwAL-2QFrcR7JrXRQG9kUy76O2VcSgbdPROsHfOYeywarhalyVSZ-6OOYK_Q_DLIaOC0jXrnkzm2ymMQFQlBAIysrYeEM1wxiFbwDt-lAcbcOEtHEf5ZlWi75nUzlWn8bSx_5FO4TbZ5hIEcUiGRpiIBEMRZlOIm4ZIbZycn_vJOFRTVps0V0S4ygtDdoYXV0aERhdGFYxEmWDeWIDoxodDQXD2R2YFuP5K65ooYyx5lc87qDHZdjQQAAAC_6K5ncnjlCV4-SSjDSPEEYAEDgG2cjkc8pbCJaqVdXr7NZ-xI6mp9qSPbezL2cstD3926BCv8UIivuJfirBgsHM1zmV2xfl6izSSAHHNUusb-FpQECAyYgASFYIH5eCwFeKEl30WEch1c15VLbaCeYeTq1VqPLXGy7AH4RIlgg1r6piXl1GUJ1YTCZFdxeKqg9r4lwi7yKozCfXTGnTxQ",
        getTransports: {},
        clientDataJSON:
          "eyJjaGFsbGsVuZ2UiOiJoOVpKN21aRlQ4OEpPWHJBdGVIcWFDWmJqVlVWTnppd1Fta1JGRGk1WDZEel9SV2Vwc2xKS0RVU2dLV2pndDJCc1FjM3Qwcm9WYkRRVGRTUHJIYXE0dyIsIm9yaWdpbiI6Imh0dHA6Ly9sb2NhbGhvc3Q6MzAwMSIsInR5cGUiOiJ3ZWJhdXRobi5jcmVhdGUifQ"
      },
      getClientExtensionResults: {},
      id:
        "4BtnI5HPKWwiWqlXV6-zWfsSOpqfakj23sy9nLLQ9_dugQr_FCIr7iX4qwYLBzNc5ldsX5eos0kgBxzVLrG_hQ",
      type: "public-key"
    };
    let verification = await verifyAttestation(credential);

    expect(verification.verified).toEqual(false);
  });
});
