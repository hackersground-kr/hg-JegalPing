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
        <Route path="/loader" component={<LoaderPage /> } />
        <Route path="/signup" component={<SignUpPage />} />
        <Route path="/signIn" component={<SignInPage />} />
        <Route path="/" component={<MainPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
