import React from 'react';
import { Image } from 'react-bootstrap';
import '../CSS/Header.css';
import background from '../Asset/background.jpg';
import { Parallax } from 'react-scroll-parallax';


const Banner = () => {
  return (
    <div class="container">
  <Image src={background} alt="Snow" className='bg' style={{ width:"100%" }}/>
  <div class="text text-center">
    <h1 className='fw-bolder'>
    Ideas
    </h1>
    <h3>
        where our great thing begin
    </h3>
  </div>
</div>
  );
};

export default Banner;
