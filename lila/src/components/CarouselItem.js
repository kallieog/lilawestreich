import Carousel from "react-bootstrap/Carousel";

function CarouselItem(props) {
  return (
    <>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={props.url}
          alt={props.key}
        />
      </Carousel.Item>
    </>
  );
}

export default CarouselItem;
