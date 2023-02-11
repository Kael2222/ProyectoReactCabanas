import React from 'react'
import Navbar from './navbar/Navbar'
import { useState } from 'react';
import MenuButton from './menu/MenuButton';


const Header = () => {

  const [open, setOpen] = useState(false);

  const handleClick = () => {
    setOpen(!open);
  };


  return (
    <header>
        <Navbar open= {open} />
        <MenuButton open={open} handleClick={handleClick} />
    </header>
  )
}

export default Header