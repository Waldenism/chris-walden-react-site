import React, { Component } from 'react'
import Article from '../../components/Article'
import PortfolioData from './PortfolioData'

class Portfolio extends Component {

  state = {
    data: PortfolioData
  }

  render() {

    return(

      <div className='section'>
        <div className='container'>
          <div className='contact'>

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
    )
  }
}

export default Portfolio