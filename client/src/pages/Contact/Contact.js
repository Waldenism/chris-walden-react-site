import React, { Component } from 'react'
import Article from '../../components/Article'
import ContactData from './ContactData'

class Contact extends Component {

  state = {
    data: ContactData
  }

  render() {

    return(
      <div className='section'>
        <div className='container'>
          <div className='contact animation-target'>

            <ul>
              {this.state.data.map((info, index) => (
                <li className='box' key={index}>
                  <Article title={info.title}
                    small={info.small}
                    small2={info.small2}
                    icon={info.icon}
                    note={info.note}
                    note2={info.note2}
                    note3={info.note3}
                    url={info.url}
                    ghurl={info.ghurl}/>  
                </li>
              ))}
            </ul>

          </div>
        </div>
      </div>
    )
  }
}

export default Contact
