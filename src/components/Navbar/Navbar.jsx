import s from "./Navbar.module.css";
import sBtn from "../Button/Button.module.css";
import { NavLink } from "react-router";

// import Button from "../Button/Button";

function Navbar({ setPage }) {
  // function Navbar({ page, setPage }) {
  function handleNavBtn(page) {
    setPage(page);
  }

  return (
    <nav className={s.nav}>
      {/* <Routes> */}
      <NavLink
        to="/vite-project"
        className={({ isActive }) => {
          return isActive
            ? sBtn.btn + " " + s.navBtn + " " + s.active
            : sBtn.btn + " " + s.navBtn;
        }}
        onClick={() => handleNavBtn("home")}
      >
        Home
      </NavLink>
      <NavLink
        to="/vite-project/profile"
        className={({ isActive }) => {
          return isActive
            ? sBtn.btn + " " + s.navBtn + " " + s.active
            : sBtn.btn + " " + s.navBtn;
        }}
        onClick={() => handleNavBtn("profile")}
      >
        Profile
      </NavLink>
      <NavLink
        to="/vite-project/users"
        className={({ isActive }) => {
          return isActive
            ? sBtn.btn + " " + s.navBtn + " " + s.active
            : sBtn.btn + " " + s.navBtn;
        }}
        onClick={() => handleNavBtn("users")}
      >
        Users
      </NavLink>
      <NavLink
        to="/vite-project/form"
        className={({ isActive }) => {
          return isActive
            ? sBtn.btn + " " + s.navBtn + " " + s.active
            : sBtn.btn + " " + s.navBtn;
        }}
        onClick={() => handleNavBtn("form")}
      >
        Form
      </NavLink>
      <NavLink
        to="/vite-project/about"
        // className={sBtn.btn + " " + s.navBtn}
        className={({ isActive }) => {
          return isActive
            ? sBtn.btn + " " + s.navBtn + " " + s.active
            : sBtn.btn + " " + s.navBtn;
        }}
        onClick={() => handleNavBtn("about")}
      >
        About
      </NavLink>
      {/* </Routes> */}

      {/* <Button
        styles={page === "home" ? s.navBtn + " " + s.active : s.navBtn}
        onClick={() => handleNavBtn("home")}
      >
        Home
      </Button>
      <Button
        styles={page === "profile" ? s.navBtn + " " + s.active : s.navBtn}
        onClick={() => handleNavBtn("profile")}
      >
        Profile
      </Button>
      <Button
        styles={page === "users" ? s.navBtn + " " + s.active : s.navBtn}
        onClick={() => handleNavBtn("users")}
      >
        Users
      </Button>
      <Button
        styles={page === "form" ? s.navBtn + " " + s.active : s.navBtn}
        onClick={() => handleNavBtn("form")}
      >
        Form
      </Button>
      <Button
        styles={page === "about" ? s.navBtn + " " + s.active : s.navBtn}
        onClick={() => handleNavBtn("about")}
      >
        About
      </Button> */}
    </nav>
  );
}

export default Navbar;
