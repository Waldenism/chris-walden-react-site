import React from 'react'

import SundryBar from '../../../components/SundryBar'

const Harp = () =>
  <div>

    <SundryBar />

    <div className='section'>
      <div className='container'>
        <div className='contact'>


          <section className="hero is-light my-hero">
            <div className="hero-body">
              <div className="container">
                <h1 className="title">
                  Harp
                </h1>
                <h2 className="subtitle">
                  Here are a few pieces using mediocre recording equipment
                </h2>
              </div>
            </div>
          </section>
          
          <div className='section'>
            <div className='container'>
              <div className='harpVid1'>
                <video className='' controls>
                  <source src='./images/gbtw.mov' />
                </video>
              </div>
            </div>
          </div>

          <div className='section'>
            <div className='container'>
              <div className='harpVid1'>
                <video className='' controls>
                  <source src='./images/mkw.mov' />
                </video>
              </div>
            </div>
          </div>

          <div className='section'>
              <div className='harpVid1'>
                <video className='' controls>
                  <source src='./images/musette.mov' />
                </video>
              </div>
          </div>

          <div className='section'>
            <img src='./images/harp 1403.jpg' alt='harp' />
          </div>              

          <div className='box is-light'>
            <h2 className="subtitle">
              more content on instagram @chrisplaysharp
            </h2> 
          </div>

        </div>
      </div>
    </div>

  </div>

export default Harp