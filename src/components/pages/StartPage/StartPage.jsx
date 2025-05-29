import Button from "../../Button/Button";
import reactLogo from "../../../assets/react.svg";
import s from "./StartPage.module.css";

function StartPage({ setPage }) {
  function handleStartBtnClick() {
    setPage("profile");
  }

  return (
    <section className={s.startPage}>
      <h4>Start</h4>
      <Button styles={s.btnStart} onClick={handleStartBtnClick}>
        <img src={reactLogo} alt="start button" />
      </Button>
      <p>Click to continue</p>
    </section>
  );
}

export default StartPage;
