import { Router, Routes } from "react-router-dom";
import '../components/Auth/SignIn/index.jsx'
import SignIn from "../components/Auth/SignIn";
import SignUp from "../components/Auth/SignUp";

function App() {
  return (
    <Routes>
      <Router path="/signin" element={<SignIn/>}/>
      <Router path='/signup' element={<SignUp/>}/>
      <Router/>
      <Router/>
      <Router/>
    </Routes>
  );
}

export default App;
