import React from 'react'
import './Header.css'
import { Link } from 'react-router-dom'


const Header = () =>
  <nav className='navabar is-fixed-top'>

    <div className='top-bar'>
      <div className='container'>
        <div className='navbar-brand animation-target2'>
          <Link to='/' className='navbar-item emblem'>
            Walden, Chris
          </Link>
        </div>
      </div>
    </div>

    <div className='not-top-bar gainsboro'>
      <div className='container'>
        <div className='breadcrumb'>
          <ul className='line0'>                    
            <li className='navbar-item'><Link to='/'> ABOUT </Link></li>
            <li className='navbar-item'><Link to='/contact'> CONNECT </Link></li>
            <li className='navbar-item'><Link to='/portfolio'> PORTFOLIO </Link></li>
            <li className='navbar-item'><Link to='/sundry'> SUNDRY </Link></li>
          </ul>
        </div>
      </div>
    </div>
    
  </nav>

export default Header