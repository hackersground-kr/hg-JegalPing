import { Router, Routes } from "react-router-dom";
import '../components/Auth/SignIn/index.jsx'
import SignIn from "../components/Auth/SignIn";
import SignUp from "../components/Auth/SignUp/Id/index.jsx";

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
