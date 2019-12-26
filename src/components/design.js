import React from 'react';
import '../css/about.css';
import { FaGithub,FaLinkedin, FaRegFilePdf } from "react-icons/fa";
import { MdEmail } from "react-icons/md"
import {Container, Row, Col} from 'react-bootstrap/';
import signature from '../images/signature.JPG';
import Navigation from './navigation';

function Design() {
  return (
   <div>
       <Navigation />
        <div className="about mt-5 pt-5 mb-5">
        <div >
        <Container>
            <Row>
                <Col md={9} className="pb-5">
                    <p>My name is <strong>Tobi Situ</strong> and I am a Designer and Developer.</p>
                    <p>I am a Computer Engineering graduate of UOttawa currently based in Ottawa, Canada, but born and raised in PortHarcourt, Nigeria. </p>
                    <p>In my spare time, I enjoy watching tv shows, taking pictures, getting to know people or taking a nap. Lol!</p>
                    <p> Feel free to take a look at some of my work that's listed on this site. </p>
                    <p>I look forward to connecting with you!</p>
                    <img src={signature} className="signature" alt="signature" />
                </Col>
                <Col md ={3}>
                    <li className="social-link space-btw"><a href="https://github.com/tobisitu" target="blank"><FaGithub className="social-link-item" size="65" /></a></li>
                    <li className="social-link space-btw"><a href="https://www.linkedin.com/in/tobisitu/" target="blank"><FaLinkedin className="social-link-item" size="65" /></a></li>
                    <li className="social-link space-btw"><a href="mailto:tobisitu@gmail.com" target="blank"><MdEmail className="social-link-item"size="65"  /></a></li>
                    <li className="social-link"><a href="https://drive.google.com/file/d/1OqqD2I5MkLmpyX3IDwzyUhWZ2uew97H8/view?usp=sharing" target="blank"><FaRegFilePdf className="social-link-item" size="65" /></a></li>
                </Col>
            </Row>
        </Container>
    </div>
    </div>
   </div>
  );
}

export default Design;