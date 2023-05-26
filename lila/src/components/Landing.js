import React from "react";
import Navigation from "./navbar";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Carousel from "react-bootstrap/Carousel";
import CarouselItem from "./CarouselItem";

export default function Neon() {
  // this array contains all of the images for this page, as well as key properties for sorting in an array assembly
  const options = [
    {
      url: "./images/neon/Evil eye.jpeg",
      key: 0,
    },
    {
      url: "./images/neon/Blue Pool Oyster 1.JPG",
      key: 1,
    },
    {
      url: "./images/neon/Oyster 1.JPG",
      key: 2,
    },
    {
      url: "./images/neon/Oyster 2.JPG",
      key: 3,
    },
    {
      url: "./images/neon/Seed to Seedling.JPG",
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
      url: "./images/neon/Tug of War 1.jpeg",
      key: 7,
    }
  ];
  let slideList = [];
  let remainder = [];
  const makeList = (key) => {
    for (let i = 0; i < options.length; i++) {
        if (key+i <= 7) {
            slideList.push(options[key+i]);
        }
    }
    remainder = options;
    for (let x = 0; x < slideList.length; x++) {
        remainder.pop(slideList[x].key)
    }
    console.log(slideList);
    console.log(remainder);
  };

  return (
    <>
      <Navigation />
      <Carousel
        variant="dark"
        interval={null}
        style={{
          width: "60%",
        }}
      >
        {slideList.map((data) => {
          return <CarouselItem url={data.url} key={data.key} />;
        })}
      </Carousel>
      <div class="container">
        <div class="heading">
          <div class="box">
            <div class="dream">
              <Container fluid>
                <Row style={{ textAlign: "center" }}>
                  <Col className="my-5 mx-2">
                    <a href="#" key={0} onClick={() => makeList(0)}>
                      <img
                        src="./images/neon/Evil eye.jpeg"
                        style={{ width: "400px" }}
                      />
                    </a>
                  </Col>
                  <Col className="my-5">
                    <a key={1} onClick={() => makeList(1)}>
                      <img
                        src="./images/neon/Blue Pool Oyster 1.JPG"
                        style={{ width: "400px" }}
                      />
                    </a>
                  </Col>
                </Row>
                <Row style={{ textAlign: "center" }}>
                  <Col className="my-5 mx-2">
                    <a key={2} onClick={() => makeList(2)}>
                      <img
                        src="./images/neon/Oyster 1.JPG"
                        style={{ width: "400px" }}
                      />
                    </a>
                  </Col>
                  <Col className="my-5 mx-2">
                    <a key={3} onClick={() => makeList(3)}>
                      <img
                        src="./images/neon/Oyster 2.JPG"
                        style={{ width: "400px" }}
                      />
                    </a>
                  </Col>
                </Row>
                <Row style={{ textAlign: "center" }}>
                  <Col className="my-5 mx-2">
                    <a key={4} onClick={() => makeList(4)}>
                      <img
                        src="./images/neon/Seed to Seedling.JPG"
                        style={{ width: "400px" }}
                      />
                    </a>
                  </Col>
                  <Col className="my-5 mx-2">
                    <a key={5} onClick={() => makeList(5)}>
                      <img
                        src="./images/neon/Shell 1.5.JPG"
                        style={{ width: "400px" }}
                      />
                    </a>
                  </Col>
                </Row>
                <Row style={{ textAlign: "center" }}>
                  <Col className="my-5 mx-2">
                    <a key={6} onClick={() => makeList(6)}>
                      <img
                        src="./images/neon/Shell 2 and 3.JPG"
                        style={{ width: "400px" }}
                      />
                    </a>
                  </Col>
                  <Col className="my-5">
                    <a key={7} onClick={() => makeList(7)}>
                      <img
                        src="./images/neon/Tug of War 1.jpeg"
                        style={{ width: "400px" }}
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
