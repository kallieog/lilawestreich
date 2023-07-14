import React, { useState } from "react";
import Navigation from "./navbar";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Modal from "react-bootstrap/Modal";
import Carousel from "react-bootstrap/Carousel";

export default function Coldworking() {
  // this array contains all of the images for this page, as well as key properties for sorting in an array assembly
  const options = [
    {
      url: "./images/coldworking/IMG_9639.jpeg",
      key: 0,
    },
    {
      url: "./images/coldworking/IMG_9616.jpeg",
      key: 1,
    },
    {
      url: "./images/coldworking/img_3.JPG",
      key: 2,
    },
    {
      url: "./images/coldworking/img_4.JPG",
      key: 3,
    },
    {
      url: "./images/coldworking/img_5.JPG",
      key: 4,
    },
    {
      url: "./images/coldworking/img_6.JPG",
      key: 5,
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
                        style={{ width: "20vw" }}
                      />
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
                  <Col className="my-5 mx-2">
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
                  <Col className="my-3 mx-2">
                    <a href="#" key={4} onClick={() => makeList(4)}>
                      <img
                        src={options[4].url}
                        style={{ width: "20vw" }}
                      />
                    </a>
                  </Col>
                  <Col className="my-3 mx-2">
                    <a href="#" key={5} onClick={() => makeList(5)}>
                      <img
                        src={options[5].url}
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
