import React, { Component } from 'react';
import '../css/projects.css';
// import ReactDOM from 'react-dom';
import "react-responsive-carousel/lib/styles/carousel.min.css";
// import { Carousel } from 'react-responsive-carousel';
import {Container, Row, Col} from 'react-bootstrap/';
import tfp from '../images/tfp.png';
import tipcalc from '../images/tipcalc.png';
import acimm from '../images/acimm.png';
import timh from '../images/timh.png';
import unify from '../images/unify.png';
import Navigation from './navigation'
import Footer from './footer';
import ScrollToTop from './scrolltotop';




class Projects extends Component{
    render(){
        return(
            <div>
                <ScrollToTop />
                <Navigation />
                <div className="development pt-5 pb-5">
               <Container>
                    <Row className="mt-5 pt-5">
                        <Col >
                            <h2 className="section-title">Development</h2>
                        </Col>
                   </Row>
                   <Row className="pt-4">
                       <Col md={4}>
                        <div className="dev-item">
                            <img src={tfp} className="dev-img" alt=""/>
                            <div className="overlay">
                            <a href="https://tobisitu.github.io/the-foodplace/" target="blank"> <button className="caption">  Visit site</button></a>
                            </div>
                        </div>
                       </Col >
                       
                       <Col md={4}>
                       <div className="dev-item">
                           <img src={tipcalc} className="dev-img" alt=""/>
                           <div className="overlay">
                                <a href="https://tobisitu.github.io/TipCalculator/"target="blank" ><button className="caption">Visit site</button></a>
                            </div>
                    </div>
                       </Col>
                       
                       <Col md={4}>
                       <div className="dev-item">
                           <img src={acimm} className="dev-img" alt=""/>
                           <div className="overlay">
                                <a href="https://jiayuechen.com/imm/" target="blank"><button className="caption">Visit site</button></a>
                            </div>
                    </div>
                       </Col>
                   </Row>

                   <Row className="mt-5 ">
                        <Col >
                            <h2 className="section-title">Design</h2>
                        </Col>
                   </Row>
                   <Row className="pt-4">
                       <Col md={6}>
                        <div className="des-item">
                            <img src={timh} className="des-img" alt=""/>
                            <div className="overlay2">
                            <a href="https://drive.google.com/file/d/1-37vKwsUOz_6dlBinrB8siZdXmETHUVm/view?usp=sharing" target="blank"> <button className="caption">  View project</button></a>
                            </div>
                        </div>
                       </Col >
                       
                       <Col md={6}>
                       <div className="des-item">
                           <img src={unify} className="des-img" alt=""/>
                           <div className="overlay2">
                                <a href="https://drive.google.com/file/d/1KqIVp4ERjxRgvbmZq3YUIeIfPwQYoRCd/view?usp=sharing"target="blank" ><button className="caption">View project</button></a>
                            </div>
                    </div>
                       </Col>
                       
                   </Row>
               </Container>
            </div>
            <Footer/>
            </div>
        );
    }

}

export default Projects;