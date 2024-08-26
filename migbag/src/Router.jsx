import { BrowserRouter, Route, Routes } from "react-router-dom";
import MainPage from "./pages/MainPage"
import SignInPage from "./pages/SignInPage";
import SignUpPage from "./pages/SignUpPage";

const Router = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<MainPage />} />
                <Route path="/signIn" element={<SignInPage />} />
                <Route path="/signUp" element={<SignUpPage />} />
            </Routes>
        </BrowserRouter>
    )
}

export default Router;