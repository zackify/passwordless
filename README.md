![Tests](https://github.com/zackify/passwordless/workflows/Tests/badge.svg)

## Beta

I originally wrote this a year ago... I planned to finish it but got discouraged at the Saas platform offering I built on top of this. The code here is more readable and uses TS unlike any of the other Node Webauthn examples I've seen. With that being said I would like to refactor it a bit more before releasing a v1.

## Quickstart

I haven't added much documentation just yet, but here's how to get started.

- Take a look at the [example server](https://github.com/zackify/passwordless/blob/master/example/server/src/server.ts)
- Check the [frontend example code](https://github.com/zackify/passwordless/blob/master/example/client/src/App.tsx), for interacting with the server

This will give an overview of the whole handshake process! I tried to make it as easy as possible. In the next few weeks more updates, docs, and refactor will be coming.

### Introduction

Passwordless is an open source library and [SaaS platform](https://passwordless.app) for managing hardware authentication. This library provides the low level abstractions needed to easily complete the handshake process. It builds upon the reference library implementations, and takes a functional approach for long term maintainability.

Reference implementations I found while building this tended to include every [attestation](https://www.w3.org/TR/webauthn/#attestation) type inside one large file. They also did not have any examples of parsing the certificates that devices give you, and abstracting device data from them. This package is built to be extendable if other attestations are added to the spec later on. It will be easy for someone to PR these features and test them individually, as each type is its own function.

Device identification is handled on a per-manufacturer basis. I have started by adding a small yubikey implementation using [Yubico's manifest they provide](https://developers.yubico.com/U2F/Attestation_and_Metadata/). What this means is, registering a yubikey with this library will output the device info (name of the security key, and other bits). Based on this logic, other people can add support for hardware keys from other manufacturers by following the example in [the devices folder](server/src/attestation/devices).
