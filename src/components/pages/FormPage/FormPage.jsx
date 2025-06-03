import { useState } from "react";
import s from "./FormPage.module.css";

function Form() {
  const [value, setValue] = useState("");

  return (
    <>
      <form className={s.form}>
        <label htmlFor="input">Type text:</label>
        <input
          id="input"
          type="text"
          value={value}
          onChange={(e) => setValue(e.target.value)}
          placeholder="Enter text"
        />
      </form>
      <p>Typed text:</p>
      <pre>{value}</pre>
    </>
  );
}

export default Form;
