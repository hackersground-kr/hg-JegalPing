import React, { useState } from 'React';
import axios from "axios";
import './signup.css';
import {useNavigate} from 'react';


const signup1 = () => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [username, setUsername] = useState('');
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const navigate = useNavigate('');

    const signup1 = {
        username
    }

    if (username.length < 1) {
        alert('사용자 이름은 최소 1자 이상 입력되어야 합니다');
        return;
    }


    axios.post("http://", signup1)
        .then(response => {
        if(response.status === 200) {
            alert('로그인이 완료되었습니다');
            navigate('/signupstep2');
        } else {
            alert('다시 시도하십시오 ')
        }

    })
        .catch(error => {
            console.error("There was an error creating the post!", error);
        });

    return (
        <div className="post-form-page">
            <h1>글 쓰기</h1>
            <form onSubmit={signup1}>
                <div>
                    <label>글쓴이: </label>
                    <input type="text" value={signup1.username} onChange={(e) => setWriter(e.target.value)} />
                </div>
                <button type="submit" onClick={signup1}>저장</button>
            </form>
        </div>
    );

}
