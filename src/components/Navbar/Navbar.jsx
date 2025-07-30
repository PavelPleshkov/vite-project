import s from "./Navbar.module.css";
import sBtn from "../Button/Button.module.css";
import { NavLink } from "react-router-dom";

function Navbar({ setPage }) {
  function handleNavBtn(page) {
    setPage(page);
  }

  return (
    <nav className={s.nav}>
      <NavLink
        to="/vite-project"
        end
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
        className={({ isActive }) => {
          return isActive
            ? sBtn.btn + " " + s.navBtn + " " + s.active
            : sBtn.btn + " " + s.navBtn;
        }}
        onClick={() => handleNavBtn("about")}
      >
        About
      </NavLink>
    </nav>
  );
}

export default Navbar;
