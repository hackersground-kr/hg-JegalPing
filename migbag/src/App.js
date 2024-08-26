import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SignUpPage from "./pages/SignUpPage";
import MainPage from "./pages/MainPage";
import SignInPage from "./pages/SignInPage";
import LoaderPage from "./pages/LoaderPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/loader" element={<LoaderPage /> } />
        <Route path="/signUp" element={<SignUpPage />} />
        <Route path="/signIn" element={<SignInPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
