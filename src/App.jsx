import { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
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
      <BrowserRouter>
        <Header page={page} setPage={setPage} />

        <main className="content">
          <Routes>
            <Route
              path="/vite-project"
              element={<StartPage setPage={setPage} />}
            />
            <Route path="/vite-project/profile" element={<ProfilePage />} />
            <Route path="/vite-project/users" element={<UsersPage />} />
            <Route path="/vite-project/form" element={<FormPage />} />
            <Route path="/vite-project/about" element={<AboutPage />} />
          </Routes>
        </main>
        <Footer page={page} setPage={setPage} />
      </BrowserRouter>
    </>
  );
}

export default App;
