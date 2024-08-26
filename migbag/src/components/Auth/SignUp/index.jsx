import React, { useState } from "react";
import * as S from "./style";
import axios from "axios";
import { setCookie } from "../../../utils/Cookie";
import { useNavigate } from "react-router-dom";
import CONFIG from "../../../config/config.json";
import { MobileView } from "../../common/MobileView/MobileView";
import { Button } from "../../common/Button/Button";


const SignUp = () => {
  const navigate = useNavigate();

  const [id, setId] = useState("");
  const [pw, setPw] = useState("");
  const [pwRecheck, setPwRecheck] = useState("");
  const [tel, setTel] = useState(0);

  const signUp = async () => {
    const response = await axios.post(`${CONFIG.serverURL}`, {
      id: id,
      pw: pw,
      pwRecheck: pwRecheck,
      tel: tel,
    });
    return response;
  };

  const Server = async () => {
    if (id === "") {
      alert("아이디를 입력해주세요");
      return;
    }
    if (pw !== pwRecheck) {
      return;
    }

    signUp()
      .then((response) => {
        console.log(response);
        window.alert("회원가입 되었습니다.");
        return navigate("/");
      })
      .catch((error) => {
        console.log(error.response);
        window.alert("회원가입에 실패하였습니다.");
        if (error.response.status === 409) {
          window.alert("이미 가입된 이메일입니다.");
        }
      });
  };

  return (
    <MobileView>
      
      <Button onClick={Server}>다음</Button>
    </MobileView>
  );
};

export default SignUp;
