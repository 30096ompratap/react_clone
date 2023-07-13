import React from 'react'
import './Header.css'
import logo from './asset/images/logo_bewakoof.png'; 
import {CiHeart, CiShoppingBasket} from 'react-icons/ci';

const Header = () => {
  return (
    <div className='header'>
        <div className='header1'>
            <div className='left-option'>
            <a href="#">Offer</a>
            <a href='#'>FanBook</a>
            <a href='#'>Download App</a>
            <a href='#'>Tribe</a>
            </div>

            <div className='right-option'>
                <a href="#">Contact us </a>
                <a href="#">Track Order </a>
            </div>
        </div>

        <div className='header2'>
          <div className='left-option'>
            <a  href="#"><img src={logo} className='logo'/></a>
            <a href='#'>MEN</a>
            <a href='#'>WOMEN</a>
            <a href='#'>MOBILE COVER</a>
            </div>
            <div className='right-option'>
                <input type='text' placeholder='search'/>
                <div className='vline'></div>
                <a href="#">Login </a>
                
                <div><CiHeart/></div>
                <div><CiShoppingBasket/></div>
                <a href="#"></a>
            </div>
        </div>
    </div>
  )
}

export default Header