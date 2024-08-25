import React, {useState} from 'react'
import {useNavigate} from "react";
import * as S from "./Style";

const SignIn = (e) => {
  e.preventDefault()

  const [username,setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate('');
  if(username.length < 1 || password.length < 1) {
    alert('아이디 또는 비번이 입력되지 않았습니다');
    return
  }

  const signin = {
    username,
    password
  }

  axios.post("http://localhost:8080",signin)
      .then(response => {
        if(response.status === 200) {
          alert('로그인이 완료되었습니다');
          navigate('/');
        } else {
          alert('로그인 실패')
        }

      })
      .catch(error => {
        console.error("세션에 오류가 있습니다.", error);
      });

  return (
    <div>

    </div>
  )
}

export default SignIn