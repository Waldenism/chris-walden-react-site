import React, { Component } from 'react'
import BlogData from './BlogData'
import SundryBar from '../../../components/SundryBar'

class Blog extends Component {
  
  state = {
    data: BlogData
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
                      Blog
                    </h1>
                    <h2 className="subtitle">
                      Stay tuned to get inside the mind of Chris
                    </h2>
                  </div>
                </div>
              </section>

              <ul>
                {/*this.state.data.map((info, index) => (
                  <li key={index}>

                  </li>
                ))*/}
              </ul>

          </div>
        </div>

      </div>
    )
  }
  
}
export default Blog