import React from 'react';
import './Login.css';
import Cup from "../img/cup.png";

const Login = () => {
    return (
        <div className="background">
            <img className='cup' src={Cup}/>
            <text>Welcome to PIKU</text>
            <div className="say">
                <text>이상형 월드컵을 만들고 공유하려면 로그인이 필요합니다.</text>
                <br />
                <text>이메일 주소만으로 간단히 계정 생성이 가능합니다.</text>
            </div>
        </div>
    );
}

export default Login;
