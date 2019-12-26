import React from 'react';
import '../css/about.css';
import { FaGithub,FaLinkedin, FaRegFilePdf } from "react-icons/fa";
import { MdEmail } from "react-icons/md"
import {Container, Row, Col, Nav} from 'react-bootstrap/';
import signature from '../images/signature.JPG';
import Navigation from './navigation';
import Footer from './footer';
import ScrollToTop from './scrolltotop';

function About() {
  return (
    <div>
        <ScrollToTop />
        <Navigation/>
        <div className="about mt-5 pt-5 mb-5">
            <Container>
                <Row>
                    <Col md={9} className="pb-5">
                        <p>My name is <strong>Tobi Situ</strong> and I am a Designer and Developer.</p>
                        <p>I am a Computer Engineering graduate of UOttawa currently based in Ottawa, Canada, but born and raised in PortHarcourt, Nigeria. </p>
                        <p>I recently discovered a love for UX Design and Web development and have been pursuing that ever since. Feel free to take a look at some of my work that's listed on this site and Github.</p>
                        <p>In my spare time, I'm either watching a tv show, listening to podcasts/music, taking pictures (of myself &amp; others), getting to know people or taking a nap. Lol!</p>
                        <br />
                        <h2>Contact</h2>
                        <p>Shoot me an email or add me on LinkedIn if you need to contact me  :) </p>
                        <p>And my résumé is available <a href="https://drive.google.com/file/d/1OqqD2I5MkLmpyX3IDwzyUhWZ2uew97H8/view?usp=sharing" target="blank" className="resume"><em>here</em></a>.</p>
                        <p>I look forward to connecting with you!</p>
                        <img src={signature} className="signature" alt="signature" />
                    </Col>
                    <Col md ={3} className="socials">
                        <li className="social-link space-btw"><a href="https://github.com/tobisitu" target="blank"><FaGithub className="social-link-item" size="65" /></a></li>
                        <li className="social-link space-btw"><a href="https://www.linkedin.com/in/tobisitu/" target="blank"><FaLinkedin className="social-link-item" size="65" /></a></li>
                        <li className="social-link space-btw"><a href="mailto:tobisitu@gmail.com" target="blank"><MdEmail className="social-link-item"size="65"  /></a></li>
                        {/* <li className="social-link"><a href="https://drive.google.com/file/d/1OqqD2I5MkLmpyX3IDwzyUhWZ2uew97H8/view?usp=sharing" target="blank"><FaRegFilePdf className="social-link-item" size="65" /></a></li> */}
                    </Col>
                </Row>
            </Container>
        </div>
        <Footer/>
    </div>
  );
}

export default About;