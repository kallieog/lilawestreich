import React from "react";
import Navigation from "./navbar";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';

export default function Flameworking() {
    return (
        <>
            <Navigation />
            <div class="container">
                <div class="heading">
                    <div class="box">
                        <div class="dream">
                            <Container fluid>
                            <Row style=
                            {{textAlign: "center"}}>
                                <Col className="my-5 mx-2">
                                <img 
                                    src="./images/flameworking/19F0AC93-3A63-490D-A5DD-B35922695C01.JPG"
                                    style={{width: "400px"}} />
                                </Col>
                                <Col className="my-5">
                                <img 
                                src="./images/flameworking/Seed 6 v2.jpeg"
                                style={{width: "400px"}} />
                                </Col>
                            </Row>
                            <Row style=
                            {{textAlign: "center"}}>
                                <Col className="my-5 mx-2">
                                <img 
                                    src="./images/flameworking/Seed1_silverstrike.JPG"
                                    style={{width: "400px"}} />
                                </Col>
                                <Col className="my-5 mx-2">
                                <img 
                                src="./images/flameworking/Seed3_clear.JPG"
                                style={{width: "400px"}} />
                                </Col>
                            </Row>
                            <Row style=
                            {{textAlign: "center"}}>
                                <Col className="my-5 mx-2">
                                <img 
                                    src="./images/flameworking/Seed6_walnut copy.JPG"
                                    style={{width: "400px"}} />
                                </Col>
                                <Col className="my-5 mx-2">
                                <img 
                                src="./images/flameworking/B1348502-52FA-413D-9485-45D148E6EEF2.JPG"
                                style={{width: "400px"}} />
                                </Col>
                            </Row>
                            <Row style=
                            {{textAlign: "center"}}>
                                <Col className="my-5 mx-2">
                                <img 
                                    src="./images/flameworking/B18F48C7-4381-4BD0-AC63-FCD49C9C0A24-1.JPG"
                                    style={{width: "400px"}} />
                                </Col>
                                <Col className="my-5">
                                <img 
                                src="./images/flameworking/EE616781-6E2F-4C8A-A5DC-90F3E37A5FCB.JPG"
                                style={{width: "400px"}} />
                                </Col>
                            </Row>
                            
                            </Container>
                        </div>


                    </div>

                </div>

            </div>
        </>
  
    );
}