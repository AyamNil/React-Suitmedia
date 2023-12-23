import React from 'react';
import { Image } from 'react-bootstrap';
import '../CSS/Header.css';
import background from '../Asset/background.jpg';
import { Parallax } from 'react-scroll-parallax';


const Banner = () => {
  return (
    <div className="header bg">
        <Image src = {background}>
            
        </Image>
        <h2>
            Ideas
        </h2>
        <h3>
            Where All Great Thing Begin
        </h3>
    </div>
  );
};

export default Banner;
