import React, { Component } from 'react'
import './Article.css'

class Article extends Component {

  state = {
    hover: false
  }

  hoverIn = () => {
    this.setState({
      hover: true
    })
  }

  hoverOut = () => {
    this.setState({
      hover: false
    })
  }

  render() {

    return (
      <div hover={ this.state.hover}
        className={ this.state.hover ? 'box animation-target' : 'box' }
        onMouseEnter={ this.hoverIn }
        onMouseLeave={ this.hoverOut }
      > <div className='mybox'>
        <article className="media">
          <figure className="media-left">
            <a href={this.props.url}>
              <p className="image is-64x64">
                <img src={this.props.icon} alt={this.props.title} className='ittle-pic'/>
              </p>
            </a>
          </figure>

          <div className="media-content">
            <div className="content">
              <p>
                <strong>{this.props.title}</strong> - <a href={this.props.url}>
                  {this.props.small}
                </a> - <a herf={this.props.ghurl}>
                   {this.props.small2}
                </a> 

                <br />

                <small>
                  { this.props.note }<br />
                  { this.props.note2 }<br />
                  { this.props.note3 }
                </small>
              </p>
            </div>
          </div>
        </article></div>
      </div>
    )

  } 
}

export default Article