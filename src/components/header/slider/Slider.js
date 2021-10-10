import React from 'react'
import Carousel from 'react-bootstrap/Carousel';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Slider.css';


const Slider = () => {
  return (
    <div className="slider_body">
     <Carousel>
  <Carousel.Item interval={10000}>
    <img
      className="d-block w-100"
      src="https://manager.pokhariyaschool.edu.np/uploads/pokhariyaschool/slides/Before%203%20years.jpg"
      alt="First slide"
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
    />
    <Carousel.Caption>
      <h3>Second slide label</h3>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item interval={10000}>
    <img
      className="d-block w-100"
      src="https://manager.pokhariyaschool.edu.np/uploads/pokhariyaschool/slides/Shree%20Pokhariya.JPG"
      alt="Third slide"
    />
    <Carousel.Caption>
      <h3>Third slide label</h3>
      <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
      
    </div>
  )
}

export default Slider
