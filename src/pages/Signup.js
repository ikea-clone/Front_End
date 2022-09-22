import React, {useState} from 'react';
import './Signup.css';
import Cup from "../img/cup.png";

const Signup = () => {
    let [na, setna] = useState('');
    let [id, setId] = useState('');
    let [pw, setPw] = useState('');

    return (
        <div>
            <img className='cup' src={Cup}/>
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
                <button>하이</button>
            </div>
        </div>
    );
}

export default Signup;
