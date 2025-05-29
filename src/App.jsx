import { useState } from "react";
import "./App.css";

import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";

import StartPage from "./components/pages/StartPage/StartPage";
import ProfilePage from "./components/pages/ProfilePage/ProfilePage";
import AboutPage from "./components/pages/AboutPage/AboutPage";
import UsersPage from "./components/pages/UsersPage/UsersPage";
import FormPage from "./components/pages/FormPage/FormPage";

function App() {
  const [page, setPage] = useState("home");

  return (
    <>
      <Header page={page} setPage={setPage} />

      <main className="content">
        {page === "home" && <StartPage setPage={setPage} />}
        {page === "profile" && <ProfilePage />}
        {page === "users" && <UsersPage />}
        {page === "form" && <FormPage />}
        {page === "about" && <AboutPage />}
      </main>
      <Footer page={page} setPage={setPage} />
    </>
  );
}

export default App;
