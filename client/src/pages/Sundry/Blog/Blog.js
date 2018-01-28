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
            <div className='contact'>

              <ul>
                {/*this.state.data.map((info, index) => (
                  <li key={index}>

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
export default Blog