import React, { useState } from 'react';
import { askForCredential } from './webauthn/register';
import { handleLogin } from './webauthn/login';

const App = () => {
  let [username, setUsername] = useState('');

  return (
    <div className="App">
      <header className="App-header">
        <input
          type="text"
          value={username}
          onChange={event => setUsername(event.target.value)}
        />
        <p
          onClick={async () => {
            let credential = await handleLogin({
              challenge:
                '4sQioQ-g92of8C_eRE5omIj9EUwgaF6b52-ewjAsNGJHA1Z9CCbJSj4XzQEOA8lWF9dgQvPn6PQMLHYgopJmnQ',
              allowCredentials: [
                {
                  type: 'public-key',
                  id:
                    'OBevL9RdP3chxkXncHGqAQrI3a6iJDb8tjhrvAf5FjZf29G17EGhh-o8tuYhRs4YpdmjMTYk_FpmvF3HdxcRiA',
                  transports: ['usb', 'nfc', 'ble'],
                },
              ],
            });
            console.log(credential);
          }}
        >
          Login
        </p>
        <p
          onClick={async () => {
            let credential = await askForCredential({
              // server must maintain the state through sessions or something
              // so it can check the result matches
              challenge:
                'qCPnZk8wijiHC5BtG2d1mzywYrwGsIxZ9I5qkgYzxk0vhuYalD66K2KnxG4E_KR7hrnqmN5vFOONYNDQdUVwDw',
              rp: {
                name: 'Local Test',
                id: 'localhost',
              },
              user: {
                id: Uint8Array.from('useridfromserver', c => c.charCodeAt(0)),
                name: username,
                displayName: username,
              },
            });

            console.log(credential);
          }}
        >
          click here to register
        </p>
      </header>
    </div>
  );
};

export default App;
