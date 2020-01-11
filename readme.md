1. set challenge in App.tsx for askForCredential
2. Load the page, type a username, hit register
3. copy the credential from chrome console into server.ts verify command, make sure challenge matches
4. yarn start in the server
5. copy credID value, paste it into setupLogin in server.ts, call setupLogin, yarn start
6. copy and paste console output into App.tsx handleLogin method (make sure transports is ['usb', 'nfc', 'ble'])
7. tap login on the frontend, copy console output into server.ts verifyLogin function, paste the challenge from the last yarn run start command

Make private and public key

```
# Generate a private key
openssl ecparam -genkey -name secp384r1 -out private.pem

# Derive the public key from the private key
openssl ec -in private.pem -pubout -out public.pem


// when making the register / login endpoints, make sure to version in in case of key changes
```

Next:

- Split verify attestation code into folder
  - make a folder for device specific data parsing
  - make it easy to add a new device file and new attestation type
  - add a test next to each attestation file type
- Store entire PEM cert, so that parsing can be done at a later time to get device names
- store yubikey device names
- make high level functions for each step in the process, try adding express and see how it looks
- offer node library with built in verify function of the resulting login jwt token, show manual way to implement in
  your own language
- store pem cert info with registrations
- update register code to pass back pem object
- send challenge jwt back and forth with each request and verify it + check the challenge matches
