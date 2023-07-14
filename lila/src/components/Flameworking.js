import React, { useState } from "react";
import Navigation from "./navbar";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Modal from "react-bootstrap/Modal";
import Carousel from "react-bootstrap/Carousel";

export default function Flameworking() {
  const options = [
    {
      url: "./images/flameworking/19F0AC93-3A63-490D-A5DD-B35922695C01.JPG",
      key: 0,
    },
    {
      url: "./images/flameworking/squirly.jpeg",
      key: 1,
    },
    {
      url: "./images/flameworking/EE616781-6E2F-4C8A-A5DC-90F3E37A5FCB.JPG",
      key: 2,
    },
    {
      url: "./images/flameworking/Seed1_silverstrike.JPG",
      key: 3,
    },
    {
      url: "./images/flameworking/Seed3_clear.JPG",
      key: 4,
    },
    {
      url: "./images/flameworking/B18F48C7-4381-4BD0-AC63-FCD49C9C0A24-1.JPG",
      key: 5,
    },
    {
      url: "./images/flameworking/Seed6_walnut copy.JPG",
      key: 6,
    },
    {
      url: "./images/flameworking/B1348502-52FA-413D-9485-45D148E6EEF2.JPG",
      key: 7,
    },
    {
      url: "./images/flameworking/Seed4_mixed.JPG",
      key: 8,
    },
    {
      url: "./images/flameworking/Seed 5.JPG.jpeg",
      key: 9,
    },
    {
      url: "./images/flameworking/Seed 1.JPG.jpeg",
      key: 10,
    },
    {
      url: "./images/flameworking/squirly2.jpeg",
      key: 11,
    },
  ];
  const [slideList, setSlideList] = React.useState([]);
  const makeList = (key) => {
    setSlideList(options.slice(key).concat(options.slice(0, key)));
    handleShowCarousel();
  };

  const [showCarousel, setShowCarousel] = useState(false);

  const handleCloseCarousel = () => setShowCarousel(false);
  const handleShowCarousel = () => setShowCarousel(true);

  const carousel = (
    <>
      <Modal size="lg" show={showCarousel} onHide={handleCloseCarousel}>
        <Modal.Body>
          <Carousel variant="dark" interval={null} style={{ height: "95vh" }}>
            {slideList.map((data) => {
              return (
                <Carousel.Item>
                  <img
                    src={data.url}
                    className="d-block"
                    style={{
                      height: "80vh",
                      marginLeft: "auto",
                      marginRight: "auto",
                    }}
                    alt={data.key}
                    key={data.key}
                  />
                </Carousel.Item>
              );
            })}
          </Carousel>
        </Modal.Body>
      </Modal>
    </>
  );

  return (
    <>
      <Navigation />
      {carousel}
      <div class="container">
        <div class="heading">
          <div class="box">
            <div class="dream">
              <Container fluid>
                <Row style={{ textAlign: "center" }}>
                  <Col className="my-5 mx-2">
                    <a href="#" key={0} onClick={() => makeList(0)}>
                      <img src={options[0].url} 
                            style={{ width: "20vw" }} />
                    </a>
                  </Col>
                  <Col className="my-5">
                    <a href="#" key={1} onClick={() => makeList(1)}>
                      <img
                        src={options[1].url}
                        style={{ width: "20vw" }}
                      />
                    </a>
                  </Col>
                  <Col className="my-5">
                    <a href="#" key={2} onClick={() => makeList(2)}>
                      <img
                        src={options[2].url}
                        style={{ width: "20vw" }}
                      />
                    </a>
                  </Col>
                </Row>
                <Row style={{ textAlign: "center" }}>
                  <Col className="my-5 mx-2">
                    <a href="#" key={3} onClick={() => makeList(3)}>
                      <img
                        src={options[3].url}
                        style={{ width: "20vw" }}
                      />
                    </a>
                  </Col>
                  <Col className="my-5 mx-2">
                    <a href="#" key={4} onClick={() => makeList(4)}>
                      <img
                        src={options[4].url}
                        style={{ width: "20vw" }}
                      />
                    </a>
                  </Col>
                  <Col className="my-5 mx-2">
                    <a href="#" key={5} onClick={() => makeList(5)}>
                      <img
                        src={options[5].url}
                        style={{ width: "20vw" }}
                      />
                    </a>
                  </Col>
                </Row>
                <Row style={{ textAlign: "center" }}>
                  <a href="#" key={6} onClick={() => makeList(6)}></a>
                  <Col className="my-5 mx-2">
                    <img
                      src={options[6].url}
                      style={{ width: "20vw" }}
                    />
                  </Col>
                  <Col className="my-5 mx-2">
                    <a href="#" key={7} onClick={() => makeList(7)}>
                      <img
                        src={options[7].url}
                        style={{ width: "20vw" }}
                      />
                    </a>
                  </Col>
                  <Col className="my-5 mx-2">
                    <a href="#" key={8} onClick={() => makeList(8)}>
                      <img 
                        src={options[8].url}
                        style={{ width: "20vw" }} 
                      />
                    </a>
                  </Col>
                </Row>
                <Row style={{ textAlign: "center" }}>
                  <a href="#" key={9} onClick={() => makeList(9)}></a>
                  <Col className="my-5 mx-2">
                    <img
                      src={options[9].url}
                      style={{ width: "20vw" }}
                    />
                  </Col>
                  <Col className="my-5 mx-2">
                    <a href="#" key={10} onClick={() => makeList(10)}>
                      <img
                        src={options[10].url}
                        style={{ width: "20vw" }}
                      />
                    </a>
                  </Col>
                  <Col className="my-5 mx-2">
                    <a href="#" key={11} onClick={() => makeList(11)}>
                      <img 
                        src={options[11].url}
                        style={{ width: "20vw" }} 
                      />
                    </a>
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
