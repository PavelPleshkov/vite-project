import { useState } from "react";
import { BrowserRouter, Route, RouterProvider, Routes } from "react-router";
import "./App.css";

import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";

import StartPage from "./components/pages/StartPage/StartPage";
import ProfilePage from "./components/pages/ProfilePage/ProfilePage";
import AboutPage from "./components/pages/AboutPage/AboutPage";
import UsersPage from "./components/pages/UsersPage/UsersPage";
import FormPage from "./components/pages/FormPage/FormPage";

// const router = createBrowserRouter([
//   { path: "/vite-project/", element: <StartPage /> },
//   { path: "/vite-project/profile", element: <ProfilePage /> },
//   { path: "/vite-project/users", element: <UsersPage /> },
//   { path: "/vite-project/form", element: <FormPage /> },
//   { path: "/vite-project/about", element: <AboutPage /> },
// ]);

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
          {/* {page === "home" && <StartPage setPage={setPage} />}
        {page === "profile" && <ProfilePage />}
        {page === "users" && <UsersPage />}
        {page === "form" && <FormPage />}
        {page === "about" && <AboutPage />} */}
        </main>
        <Footer page={page} setPage={setPage} />
      </BrowserRouter>
      {/* <RouterProvider router={router}> */}

      {/* </RouterProvider> */}
    </>
  );
}

export default App;
