import axios from 'axios'
import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';


const login = () => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [username, setUsername] = useState('');
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [password, setPassword] = useState('');
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const navigate = useNavigate();


    const onsubmit = (e) => {
        e.preventDefault();

        if(username.length < 1 || password.length < 1) {
            alert('최소 1자 이상의 내용이 입력되어야 합니다');
            return
        }

        const login = {
            username,
            password
        }

        axios.post("http://localhost:8080",login)
            .then(response => {
                if(response.status === 200) {
                    alert('로그인이 완료되었습니다');
                    navigate('/');
                } else {
                    alert('로그인 실패')
                }


            })
            .catch(error => {
                console.error("There was an error creating the post!", error);
            });

    }


    return (
        <div className="post-form-page">
            <h1>글 쓰기</h1>
            <form onSubmit={login}>
                <div>
                    <label>아이디: </label>
                    <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
                </div>
                <div>
                    <label>비밀번호: </label>
                    <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
                </div>
                <button type="submit" onClick={login}>저장</button>
            </form>
        </div>
    );
}


export default login();