import React from 'react';
import './Login.css';
import Cup from "../img/cup.png";
import Swiper from '../component/swiper/Swiper'
import InfiniteScroll from 'react-infinite-scroller';

const Login = () => {
    const items = [1, 2, 3];
    function loadFunc(){
        
    }
    return (
        <div className="background">
            <Swiper/>
        </div>
    );
}

export default Login;
