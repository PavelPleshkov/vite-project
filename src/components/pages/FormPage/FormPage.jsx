import s from "./FormPage.module.css";

function Form() {
  return (
    <form className={s.form}>
      <label htmlFor="input">Type text:</label>
      <input id="input" type="text" placeholder="Enter text" />
    </form>
  );
}

export default Form;
