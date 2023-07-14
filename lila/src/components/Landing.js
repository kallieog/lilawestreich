import React, { useState } from "react";
import Navigation from "./navbar";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Modal from "react-bootstrap/Modal";
import Carousel from "react-bootstrap/Carousel";

export default function Neon() {
  // this array contains all of the images for this page, as well as key properties for sorting in an array assembly
  const options = [
    {
      url: "./images/neon/Blue Pool Oyster 2.JPG.jpeg",
      key: 0,
    },
    {
      url: "./images/neon/Blue Pool Oyster 1.JPG",
      key: 1,
    },
    {
      url: "./images/neon/Evil Eye.jpeg",
      key: 2,
    },
    {
      url: "./images/neon/Oyster 2.JPG",
      key: 3,
    },
    {
      url: "./images/neon/Shell 2.JPG.jpeg",
      key: 4,
    },
    {
      url: "./images/neon/Shell 1.5.JPG",
      key: 5,
    },
    {
      url: "./images/neon/Shell 2 and 3.JPG",
      key: 6,
    },
    {
      url: "./images/neon/Tug of War 2.jpeg",
      key: 7,
    },
    {
      url: "./images/neon/Tug of War 1.jpeg",
      key: 8,
    }
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
                      <img
                        src={options[0].url}
                        style={{ width: "300px" }}
                      />
                    </a>
                  </Col>
                  <Col className="my-5">
                    <a href="#" key={1} onClick={() => makeList(1)}>
                      <img
                        src={options[1].url}
                        style={{ width: "300px" }}
                      />
                    </a>
                  </Col>
                  <Col className="my-5 mx-2">
                    <a href="#" key={2} onClick={() => makeList(2)}>
                      <img
                        src={options[2].url}
                        style={{ width: "300px" }}
                      />
                    </a>
                  </Col>
                  <Col className="my-5 mx-2">
                    <a href="#" key={3} onClick={() => makeList(3)}>
                      <img
                        src={options[3].url}
                        style={{ width: "300px" }}
                      />
                    </a>
                  </Col>
                  <Col className="my-5 mx-2">
                    <a href="#" key={4} onClick={() => makeList(4)}>
                      <img
                        src={options[4].url}
                        style={{ width: "300px" }}
                      />
                    </a>
                  </Col>
                  <Col className="my-5 mx-2">
                    <a href="#" key={5} onClick={() => makeList(5)}>
                      <img
                        src={options[5].url}
                        style={{ width: "300px" }}
                      />
                    </a>
                  </Col>
                  <Col className="my-5 mx-2">
                    <a href="#" key={6} onClick={() => makeList(6)}>
                      <img
                        src={options[6].url}
                        style={{ width: "300px" }}
                      />
                    </a>
                  </Col>
                  <Col className="my-5">
                    <a href="#" key={7} onClick={() => makeList(7)}>
                      <img
                        src={options[7].url}
                        style={{ width: "300px" }}
                      />
                    </a>
                  </Col>
                  <Col className="my-5">
                    <a href="#" key={8} onClick={() => makeList(8)}>
                      <img
                        src={options[8].url}
                        style={{ width: "300px" }}
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
