import React from 'react'
import './Article.css'

const Article = props =>   
  
    <article className="media">
      <figure className="media-left">
        <a href={props.url}>
          <p className="image is-64x64">
            <img src={props.icon} alt={props.title} className='ittle-pic'/>
          </p>
        </a>
      </figure>

      <div className="media-content">
        <div className="content">
          <p>
            <strong>{props.title}</strong> - <a href={props.url}>
              {props.small}
            </a> - <a herf={props.ghurl}>
               {props.small2}
            </a> 

            <br />

            <small>
              { props.note }<br />
              { props.note2 }<br />
              { props.note3 }
            </small>
          </p>
        </div>
      </div>
    </article>

export default Article