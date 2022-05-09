import React from 'react';
import { Carousel } from 'react-bootstrap';
import banner1 from '../../images/banner (1).jpg'
import banner2 from '../../images/banner (2).jpg'
import banner3 from '../../images/banner (3).jpg'
import './Banner.css'

const Banner = () => {
    return (
        <div>
            <Carousel>
  <Carousel.Item>
    <img
      className="d-block w-100 banner_image"
      src={banner1}
      alt="First slide"
    />
    <Carousel.Caption>
      <h3>Welcome Our Truck House</h3>
      <p>This house stored is BrandTruck</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100 banner_image"
      src={banner2}
      alt="Second slide"
    />

    <Carousel.Caption>
      <h3>Welcome Our Truck House</h3>
      <p>This house stored is BrandTruck</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100 banner_image"
      src={banner3}
      alt="Third slide"
    />

    <Carousel.Caption>
      <h3>Welcome Our Truck House</h3>
      <p>This house stored is BrandTruck</p>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
        </div>
    );
};

export default Banner;