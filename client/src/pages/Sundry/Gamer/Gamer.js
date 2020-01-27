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

              <section className="hero is-light my-hero">
                <div className="hero-body">
                  <div className="container">
                    <h1 className="title">
                      Gaming
                    </h1>
                    <br />
                    <h2 className="subtitle subtit">
                      My first memories are of watching my older brother playing SNES and later empowering me by putting the controller into my hands. I am currently developing an interactive entertainment experience from level design to art assets, to original sound score and story. And of course programming. Keep up with me here for the latest!
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
    )

  }
}
  

export default Gamer