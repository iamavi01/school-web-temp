import React from "react";
import Carousel from "react-bootstrap/Carousel";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Slider.css";

const Slider = () => {
  return (
    <div className="slider_body">
      <Carousel>
        <Carousel.Item interval={10000}>
          <img
            className="d-block w-100"
            src="https://scontent.fbir5-1.fna.fbcdn.net/v/t1.6435-9/243250403_163134049324350_2425735845007246942_n.jpg?_nc_cat=108&ccb=1-5&_nc_sid=e3f864&_nc_ohc=Q3OkFoCstmMAX-WRgl5&_nc_oc=AQkVLOLCs8wMQky_EiKXc35KPPIrYzJVK8KvfnfkZP37_LrlVU6xocDdJDxcm-JMxTA&_nc_ht=scontent.fbir5-1.fna&oh=dbc84c9f30816a3e3eff508c1a4b0777&oe=6186A171"
            alt="First slide"
            height="760px"
          />
          <Carousel.Caption>
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={10000}>
          <img
            className="d-block w-100"
            src="https://manager.pokhariyaschool.edu.np/uploads/pokhariyaschool/slides/Panaromic%20view.jpg"
            alt="Second slide"
            height="760px"
          />
          <Carousel.Caption>
            <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={10000}>
          <img
            className="d-block w-100"
            src="Screenshot from 2021-10-10 12-28-27.png"
            alt="Third slide"
            height="760px"
          />
          <Carousel.Caption>
            <h3>Third slide label</h3>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default Slider;
