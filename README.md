![Tests](https://github.com/zackify/passwordless/workflows/Tests/badge.svg)
## Passwordless


- [Intro](#Introduction)
- [Server](#Server)
- [Client](#Client)

### Introduction

Passwordless is an open source library and [SaaS platform](https://passwordless.app) for managing hardware authentication. This library provides the low level abstractions needed to easily complete the handshake process. It builds upon the reference library implementations, and takes a functional approach for long term maintainability.

Reference implementations I found while building this tended to include every [attestation](https://www.w3.org/TR/webauthn/#attestation) type inside one large file. They also did not have any examples of parsing the certificates that devices give you, and abstracting device data from them. This package is built to be extendable if other attestations are added to the spec later on. It will be easy for someone to PR these features and test them individually, as each type is its own function.

Device identification is handled on a per-manufacturer basis. I have started by adding a small yubikey implementation using [Yubico's manifest they provide](https://developers.yubico.com/U2F/Attestation_and_Metadata/). What this means is, registering a yubikey with this library will output the device info (name of the security key, and other bits). Based on this logic, other people can add support for hardware keys from other manufacturers by following the example in [the devices folder](server/src/attestation/devices).
