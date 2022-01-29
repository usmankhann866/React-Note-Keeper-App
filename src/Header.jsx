import React from "react";
import logo from './Images/logo.jpg';

const Header =  ()=> {
  return (
      
    <>
    
        <div className='header_info'> 
        <img src={logo}  title='logo' width='70px' height='70px' />
        <h1 className='head_style'> Usman Note Editor </h1>
        </div>
    </>
    
    );

}

export default Header;