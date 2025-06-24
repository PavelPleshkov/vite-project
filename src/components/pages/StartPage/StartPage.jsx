// import Button from "../../Button/Button";
import reactLogo from "../../../assets/react.svg";
import s from "./StartPage.module.css";
import sBtn from "../../Button/Button.module.css";

import { NavLink } from "react-router";

function StartPage({ setPage }) {
  function handleStartBtnClick() {
    setPage("profile");
  }

  return (
    <section className={s.startPage}>
      <h4>Start</h4>
      <NavLink
        to="/vite-project/profile"
        className={sBtn.btn + " " + s.btnStart}
        onClick={handleStartBtnClick}
      >
        <img src={reactLogo} alt="start button" />
      </NavLink>
      {/* <Button styles={s.btnStart} onClick={handleStartBtnClick}>
        
      </Button> */}
      <p>Click to continue</p>
    </section>
  );
}

export default StartPage;
