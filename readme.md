1. set challenge in App.tsx for askForCredential
2. Load the page, type a username, hit register
3. copy the credential from chrome console into server.ts verify command, make sure challenge matches
4. yarn start in the server
5. copy credID value, paste it into setupLogin in server.ts, call setupLogin, yarn start
6. copy and paste console output into App.tsx handleLogin method (make sure transports is ['usb', 'nfc', 'ble'])
7. tap login on the frontend, copy console output into server.ts verifyLogin function, paste the challenge from the last yarn run start command
