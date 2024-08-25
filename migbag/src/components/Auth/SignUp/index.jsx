import React, { useState } from "react";
import CONFIG from "../../../config/config.json";
import {MobileView} from "../../common/MobileView/MobileView";
import * as S from "./Style";
import axios from "axios";
import {setCookie} from "../../../utils/Cookie";
import { useNavigate } from "react-router-dom";
import AppLogo from "../../common/Logo/AppLogo";

const SignUp = () => {
  const navigate = useNavigate();

  const [id, setId] = useState("");
  const [email, setEmail] = useState("");
  const [pw, setPw] = useState("");
  const [tel, setTel] = useState(0);

  // const oauth = async ()

  return (
    <MobileView>
      <AppLogo />
      
    </MobileView>
  );
};

export default SignUp;
