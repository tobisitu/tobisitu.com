import React from 'react';
import '../css/footer.css';
import {Container, Row, Col, Nav} from 'react-bootstrap/';

function Footer() {
  return (
    <div>
        <div className="footer pt-5 ">
            <Container>
                <Row>
                    <Col className="pb-5 copyright">
                        Copyright © Tobi Situ {new Date().getFullYear()}
                    </Col>
                </Row>
            </Container>
        </div>
    </div>
  );
}

export default Footer;