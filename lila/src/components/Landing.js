import React from "react";
import Navigation from "./navbar";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import NeonCarousel from "./NeonCarousel";

export default function Neon() {
    return (
        <>
            <Navigation />
            <NeonCarousel />
            <div class="container">
                <div class="heading">
                    <div class="box">
                        <div class="dream">
                            <Container fluid>
                            <Row style=
                            {{textAlign: "center"}}>
                                <Col className="my-5 mx-2">
                                <img 
                                    src="./images/neon/Evil eye.jpeg"
                                    style={{width: "400px"}} />
                                </Col>
                                <Col className="my-5">
                                <img 
                                src="./images/neon/Blue Pool Oyster 1.JPG"
                                style={{width: "400px"}} />
                                </Col>
                            </Row>
                            <Row style=
                            {{textAlign: "center"}}>
                                <Col className="my-5 mx-2">
                                <img 
                                    src="./images/neon/Oyster 1.JPG"
                                    style={{width: "400px"}} />
                                </Col>
                                <Col className="my-5 mx-2">
                                <img 
                                src="./images/neon/Oyster 2.JPG"
                                style={{width: "400px"}} />
                                </Col>
                            </Row>
                            <Row style=
                            {{textAlign: "center"}}>
                                <Col className="my-5 mx-2">
                                <img 
                                    src="./images/neon/Seed to Seedling.JPG"
                                    style={{width: "400px"}} />
                                </Col>
                                <Col className="my-5 mx-2">
                                <img 
                                src="./images/neon/Shell 1.5.JPG"
                                style={{width: "400px"}} />
                                </Col>
                            </Row>
                            <Row style=
                            {{textAlign: "center"}}>
                                <Col className="my-5 mx-2">
                                <img 
                                    src="./images/neon/Shell 2 and 3.JPG"
                                    style={{width: "400px"}} />
                                </Col>
                                <Col className="my-5">
                                <img 
                                src="./images/neon/Tug of War 1.jpeg"
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