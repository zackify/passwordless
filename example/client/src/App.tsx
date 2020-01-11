import React, { useState } from "react";
import { createCredential, getCredential } from "@passwordless/client";

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
            let response = await fetch(
              `http://localhost:3000/prepare-login/${username}`
            );
            let publicKey = await response.json();
            let credential = await getCredential(publicKey);
            console.log(credential);

            let response2 = await fetch(
              `http://localhost:3000/verify-credential`,
              {
                method: "POST",
                headers: {
                  "Content-type": "application/json"
                },
                body: JSON.stringify({ credential })
              }
            );
            let result = await response2.json();
            console.log("server validation", result);
          }}
        >
          Login
        </p>
        <p
          onClick={async () => {
            let response = await fetch(
              `http://localhost:3000/prepare-registration/${username}`
            );
            let publicKey = await response.json();

            let credential = await createCredential(publicKey);

            console.log("got credential");

            let response2 = await fetch(
              `http://localhost:3000/verify-credential`,
              {
                method: "POST",
                headers: {
                  "Content-type": "application/json"
                },
                body: JSON.stringify({ credential })
              }
            );
            let result = await response2.json();
            console.log("server validation", result);
          }}
        >
          click here to register
        </p>
      </header>
    </div>
  );
};

export default App;
