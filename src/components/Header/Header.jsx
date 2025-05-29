import viteLogo from "../../assets/vite.svg";
import reactLogo from "../../assets/react.svg";

import s from "./Header.module.css";

import Navbar from "../Navbar/Navbar";

function Header({ page, setPage }) {
  return (
    <header className={s.header}>
      <h3>
        Test project <img src={viteLogo} alt="vite" />
        {` & `}
        <img src={reactLogo} alt="react" />
      </h3>
      <Navbar page={page} setPage={setPage} />
    </header>
  );
}

export default Header;
