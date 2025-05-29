import s from "./Navbar.module.css";

import Button from "../Button/Button";

function Navbar({ page, setPage }) {
  function handleNavBtn(page) {
    setPage(page);
  }

  return (
    <nav className={s.nav}>
      <Button
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
      </Button>
    </nav>
  );
}

export default Navbar;
