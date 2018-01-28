import React, { Component } from 'react'
import GamerData from './GamerData'
import SundryBar from '../../../components/SundryBar'

class Gamer extends Component {
  
  state = {
    data: GamerData
  }

  render() {

    return(
      <div>

        <SundryBar />

        <div className='section'>
          <div className='container'>
            <div className='contact'>


              <section className="hero is-light my-hero">
                <div className="hero-body">
                  <div className="container">
                    <h1 className="title">
                      Gaming
                    </h1>
                    <h2 className="subtitle">
                      My first memories are of watching my older brother playing SNES and later empowring me by putting the controller into my hands.
                    </h2>
                  </div>
                </div>
              </section>

              <ul>
                {/*this.state.data.map((info, index) => (
                  <li key={index}>
                     BLOG ENTRY COMPONENT
                  </li>
                ))*/}
              </ul>

            </div>
          </div>
        </div>

      </div>
    )

  }
}
  

export default Gamer