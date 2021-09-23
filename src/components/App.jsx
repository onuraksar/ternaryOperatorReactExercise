import React from "react";

import Form from "./Form";

var isLoggedIn = false;

const currentTime = new Date().getHours();

console.log("currentTime", currentTime);

function App() {
  return (
    <div className="container">
      {
        // isLoggedIn ? <h1>Hello</h1> : <Form />
        // currentTime > 17 ? <h1>Why are you still working?</h1> : <h1>Get back to work!</h1>
        // currentTime > 17 ? <h1>Why are you still working?</h1> : null
        currentTime > 17 && <h1>Why are you still working?</h1>
      }
    </div>
  );
}

export default App;
