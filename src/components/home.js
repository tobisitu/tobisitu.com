import React from 'react';
import '../css/home.css';
import welcome from '../images/welcome.svg'
import { FaAngleDown } from "react-icons/fa";
import Typewriter from 'typewriter-effect';

function Welcome() {
  return (
    <div className="welcome">
     <img src={welcome} className="welcome-logo mb-5" alt="logo" />
     <h1 className="mb-3">Hello, I'm Tobi.</h1>

    <Typewriter
    onInit={(typewriter) => {
        typewriter.typeString('Designer')
        .callFunction(() => {
            console.log('String typed out!');
        })
        .pauseFor(1000)
        .deleteAll()
        .callFunction(() => {
            console.log('All strings were deleted');
        })
        .start();
        typewriter.typeString('Developer')
        .callFunction(() => {
            console.log('String typed out!');
        })
        .pauseFor(1000)
        .deleteAll()
        .callFunction(() => {
            console.log('All strings were deleted');
        })
        .start();
        typewriter.typeString('Designer & Developer')
        .callFunction(() => {
            console.log('String typed out!');
        })
    }}
    />
<div className="down-arrow">
     <FaAngleDown/>
     </div>
    </div>
  );
}

export default Welcome;