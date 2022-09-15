import React from 'react';
import './header.css';
import Logo from '../img/logo.png';

const header = () => {
    return (
        <div className="header">
            <img className='logo' src={Logo}/>
            <text className='worldcup' >이상형 월드컵</text>
            <text className='make'>이상형 월드컵 만들기</text>
            <text className='login'>Login</text>
        </div>
    );
}

export default header;
