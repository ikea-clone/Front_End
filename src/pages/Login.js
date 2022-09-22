import React, {useState} from 'react';
import './Login.css';
import Cup from "../img/cup.png";

const Login = () => {
    let [id, setId] = useState('');
    let [pw, setPw] = useState('');

    return (
        <div className="background">
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
            <div className="put">
                <div className="email">
                    <input
                        placeholder="이메일"
                        id="id"
                        className="ilogin"
                    />
                </div>
                <br />
                <div className="password">
                    <input
                        type="password"
                        placeholder="비밀번호"
                        id="password"
                        className="ilogin"
                    />
                </div>
            </div>
        </div>
    );
}

export default Login;
