import React from "react";

import Input from "./Input";

function Form(props) {
  return (
    <form className="form">
      <Input type="text" placeholder="Username" />
      <Input type="text" placeholder="Username" />
      <button type="submit">Login</button>
    </form>
  );
}

export default Form;
