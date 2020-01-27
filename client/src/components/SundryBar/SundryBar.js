import React from 'react'
import { Link } from 'react-router-dom'

const SundryBar = () =>  
  <div className='not-top-bar is-dark'>
    <div className='container'>
      <nav className='breadcrumb' aria-label='breadcrumbs'>
        <ul className='line1'> 
            
            <li><Link className='' to='/blog'>Dev Work</Link></li>
            <li><Link className='' to='/harp'>Harp</Link></li>
            <li><Link className='' to='/gamer'>Gamer</Link></li>

        </ul>
      </nav>
    </div>
  </div>

export default SundryBar