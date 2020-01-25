import React, { useState } from "react";
import { createCredential, getCredential } from "@passwordless/client";

// small fetch abstraction to make the code example easier
const request = async (path: string, body?: any) => {
  try {
    let headers: any = {};
    if (body) headers["Content-type"] = "application/json";

    let response2 = await fetch(`http://localhost:3000/${path}`, {
      method: body ? "POST" : "GET",
      headers,
      body: body ? JSON.stringify(body) : undefined
    });
    let response = await response2.json();
    return { response };
  } catch (error) {
    return { error };
  }
};

const App = () => {
  let [username, setUsername] = useState("");

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
            let publicKey = await request(`prepare-login/${username}`);
            if (publicKey.error) {
              return console.log(publicKey.error, "something went wrong");
            }

            let credential = await getCredential(publicKey.response);
            console.log(credential, "credential parsed from device");

            let serverValidation = await request(`verify-credential`, {
              credential
            });

            console.log("server validation", serverValidation);
          }}
        >
          Login
        </p>
        <p
          onClick={async () => {
            let publicKey = await request(`prepare-registration/${username}`);
            if (publicKey.error) {
              return console.log(publicKey.error, "something went wrong");
            }

            let credential = await createCredential(publicKey.response);
            console.log(credential, "credential created from device");

            let serverValidation = await request(`verify-credential`, {
              credential
            });

            console.log("server validation", serverValidation);
          }}
        >
          click here to register
        </p>
      </header>
    </div>
  );
};

export default App;
