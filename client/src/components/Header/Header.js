import React, { Component } from 'react'
import './Header.css'
import { Link } from 'react-router-dom'


class Header extends Component {

  state = {
    hover: false
  }

  hoverIn = () => {
    this.setState({
      hover: true
    })
  }

  hoverOut = () => {
    this.setState({
      hover: false
    })
  }

  render() {

    return(
      <nav className='navabar is-fixed-top'>

        <div className='top-bar'>
          <div className='container'>
            <div className='navbar-brand'>
              <Link to='/'
                hover={ this.state.hover }
                className={ this.state.hover ? 
                  ' emblem noDecor animation-target2' : 
                  ' emblem noDecor'}                
                onMouseEnter={ this.hoverIn }
                onMouseLeave={ this.hoverOut }
              >
                  Walden, Chris
              </Link>
            </div>
          </div>
        </div>

        <div className='not-top-bar gainsboro'>
          <div className='container'>
            <div className='tabs'>
              <ul className='line0'>                    
                <li><Link to='/'> ABOUT </Link></li>
                <li><Link to='/contact'> CONNECT </Link></li>
                <li><Link to='/portfolio'> PORTFOLIO </Link></li>
                <li><Link to='/sundry'> SUNDRY </Link></li>
              </ul>
            </div>
          </div>
        </div>
        
      </nav>
    )

  }
}

export default Header