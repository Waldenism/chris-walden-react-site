import React, { Component } from 'react'
import BlogData from './BlogData'
import Article from '../../../components/Article'
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

              <h1 className='artistic'> Web Development Projects </h1> <br />

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

          </div>
        </div>

      </div>
    )
  }
  
}
export default Blog