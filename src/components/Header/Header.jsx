import React from 'react'
import './Header.css'

import iconCart from '../../assets/cartHeader/cart_icon.svg'

const Header = () => {
	return (
		<div className='header'>
      <a href="" className="logo">LOGO</a>
			<nav className='nav'>
        <div className="item">
          <a href="" className="link">About me</a>
          <a href="" className="link">Catalog</a>
          <a href="" className="link">News</a>
        </div>
        <a href="" className="icon">
        <img src={iconCart} alt="icon on cart" />
        </a>
      </nav>
		</div>
	)
}

export default Header
