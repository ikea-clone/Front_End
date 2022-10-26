import React, {useState} from 'react';
import './Signup.css';
import Cup from "../img/cup.png";
import { useNavigate } from 'react-router-dom';

const Signup = () => {
    const nav = useNavigate();
    let [na, setna] = useState('');
    let [id, setId] = useState('');
    let [pw, setPw] = useState('');
    function main(){
        alert('로그인에 성공하셨습니다!');
        nav('/');
    }
    function logins() {
        nav('/login')
    }
    return (
        <div>
            <img className='cup' src={Cup}/>
            <div className="title">
                <text>Welcome to PIKU</text>
            </div>
            <br/>
            <div className="say">
                <text>이상형 월드컵을 만들고 공유하려면 로그인이 필요합니다.</text>
                <br />
                <br />
                <text>이메일 주소만으로 간단히 계정 생성이 가능합니다.</text>
            </div>
            <br />
            <div className="signin">
                <input
                    placeholder="닉네임"
                    id="na"
                    className="name"
                />
                <br/>
                <input
                    placeholder="이메일"
                    id="id"
                    className="email"
                />
                <br/>
                <input
                    placeholder="비밀번호"
                    id="pw"
                    className="password"
                />
                <br/>
                <button className='register' onClick={main}>계정생성</button><br/>
                <button className='golog' onClick={logins}>로그인</button>
            </div>
        </div>
    );
}

export default Signup;
