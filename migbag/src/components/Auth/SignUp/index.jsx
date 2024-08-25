import React, { useState } from "react";
import CONFIG from "../../../config/config.json";
import * as S from "./Style";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const SignUp = () => {
  const navigate = useNavigate();

  const [id, setId] = useState("");
  const [email, setEmail] = useState("");
  const [pw, setPw] = useState("");
  const [tel, setTel] = useState(0);

  // const oauth = async ()

  return (
    <>
      <></>
    </>
  );
};

export default SignUp;
