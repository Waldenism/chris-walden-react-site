import React, { Component } from 'react'
import BlogData from './BlogData'
import Article from '../../../components/Article'
// import PortfolioData from './PortfolioData'
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

            <div className='contact'>

              <h2> Web Development Projects </h2>

              <ul>
                {this.state.data.map((info, index) => (
                  <li key={index}>
                    <Article title={info.title}
                      small={info.small}
                      small2={info.small2}
                      icon={info.icon}
                      note={info.note}
                      note2={info.note2}
                      note3={info.note3}
                      url={info.url}
                      ghurl={info.ghurl}/>  <br />
                  </li>
                ))}
              </ul>

            </div>

            {/*<section className="hero is-light my-hero">
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
              </section>*/}

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