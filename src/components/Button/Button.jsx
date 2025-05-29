import s from "./Button.module.css";

function Button({ onClick, styles, children }) {
  return (
    <button
      type="button"
      className={styles ? s.btn + " " + styles : s.btn}
      onClick={onClick}
    >
      {children}
    </button>
  );
}

export default Button;
