import React, { useEffect, useState } from 'react'
import EastOutlinedIcon from "@mui/icons-material/EastOutlined";
import WestOutlinedIcon from "@mui/icons-material/WestOutlined";
import './Slider.css';

import cabin01 from '../../img/cabin01.jpg';
import cabin02 from '../../img/cabin02.jpg';
import cabin03 from '../../img/cabin03.jpg';

export default function Slider() {

  console.log(cabin01);  
  const [currentSlide, setCurrentSlide] =  useState(0);

  const data = [cabin01,cabin02,cabin03];

  const autoScroll = true;
  let slideInterval;

  const autoPlay = () => {
        slideInterval = setInterval(nextSlide, 5000);
  }  

  const prevSlide = () => setCurrentSlide(currentSlide === 0 ? 2: prev => prev -1);
  const nextSlide = () => setCurrentSlide(currentSlide === 2 ? 0: prev => prev +1);

  useEffect(()=> {
    if(autoScroll) autoPlay();
    return () => clearInterval(slideInterval)
  }, [currentSlide])  

  
  return (
    <div className='slider'>
        <div className="slider-container" style={{transform:`translateX(-${currentSlide * 100}vw)`}}>
            <img  src={data[0]} alt="" />
            <img  src={data[1]} alt="" />
            <img  src={data[2]} alt="" />
        </div>
        <div className="arrow-icons">
            <div className="arrow-icon" onClick={prevSlide}>
                <WestOutlinedIcon />
            </div>
            <div className="arrow-icon" onClick={nextSlide}>
                <EastOutlinedIcon />
            </div>
        </div>
    </div>
  )
}
