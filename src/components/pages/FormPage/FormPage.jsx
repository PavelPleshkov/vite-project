import { useState } from "react";
import { useRef } from "react";
import { useEffect } from "react";
import s from "./FormPage.module.css";

function Form() {
  const [value, setValue] = useState("");

  const ref = useRef("");
  const domRef = useRef(null);
  // console.log(ref.current);

  useEffect(() => {
    console.log("log from useEffect after rendering");
  });

  function handleClick() {
    ref.current = +(ref.current + 1);
    console.log(ref.current);
  }

  function handleClickRef() {
    domRef.current.style.color = "crimson";
    console.log(domRef.current.innerHTML);
  }

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

      <button type="button" onClick={handleClick}>
        Click for ref++
      </button>
      <div>
        Ref don't triggers rerender, ref appears/updates on the screen only when
        typing above:
        <br />
        {ref.current}
      </div>
      <div ref={domRef}>
        DIV with <i>ref</i>
      </div>
      <button type="button" onClick={handleClickRef}>
        Show DIV.innerHTML in console and color DIV
      </button>
    </>
  );
}

// function Form() {
//   const [value, setValue] = useState("");

//   return (
//     <>
//       <form className={s.form}>
//         <label htmlFor="input">Type text:</label>
//         <input
//           id="input"
//           type="text"
//           value={value}
//           onChange={(e) => setValue(e.target.value)}
//           placeholder="Enter text"
//         />
//       </form>
//       <p>Typed text:</p>
//       <pre>{value}</pre>
//     </>
//   );
// }

export default Form;
