import React from 'react'
import { Link } from 'react-router-dom'

const SundryBar = () =>  
  <div className='not-top-bar is-dark'>
    <div className='container'>
      <nav className='breadcrumb' aria-label='breadcrumbs'>
        <ul className='line1'> 
            
            <li><Link className='' to='/blog'>blog</Link></li>
            <li><Link className='' to='/harp'>harp</Link></li>
            <li><Link className='' to='/gamer'>gamer</Link></li>

        </ul>
      </nav>
    </div>
  </div>

export default SundryBar