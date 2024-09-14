import React from 'react';
import './navbar.css';
import logo from '../../assets/Logo.svg';
import botton from '../../assets/Button.svg'

const Navbar = () => {
    return(
       <header className="header">
         <a href=""><img src={logo} alt="" className='logo'/></a>
    

         <nav className="navbar">
               <a className='links' href="">Home</a>
               <a className='links' href="">About us</a>
               <a className='links' href="">Menu</a>
               <a className='links' href="">Contact us</a>
               <img src={botton} alt="" className="navDownBtn" />
         </nav>
       </header>
    );
  
  }
  
  export default Navbar