import React from 'react'
import EastOutlinedIcon from "@mui/icons-material/EastOutlined";
import WestOutlinedIcon from "@mui/icons-material/WestOutlined";
import '../img-modal/ImgModal.css'

const ImgModal = ({clickedImg, setClickedImg, nextSlide, prevSlide}) => {

  const handleClick = (e) =>{
    if (e.target.classList.contains('dismiss')){
        setClickedImg({item:null, index:null})
    }
  }

  //console.log(clickedImg.index)
  
  return (
    <div className='overlay dismiss' onClick={handleClick}>
        <img src={clickedImg.item} alt="" />
        <span className='dismiss' onClick={handleClick}>x</span>
        <div onClick={nextSlide}  className='overlay-arrows_right'><EastOutlinedIcon /></div>
        <div onClick={prevSlide}  className='overlay-arrows_left'><WestOutlinedIcon /></div>
    </div>
  )
}

export default ImgModal