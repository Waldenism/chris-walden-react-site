import React from 'react'

const About = () =>
  <div className='section'>

    <div className="tile is-ancestor">

      <span className='tile is-8 flex'>
        <div className="tile is-vertical">

          <div className='tile is-parent'>
            <article className="tile is-child notification is-dark">
              <p className="title"> <span className='intellectual'> Consumerist </span> </p>
              <p className="subtitle"></p>
              <p className="content">
                 <span className='intellectual'>consumerist</span>, <span className='artistic'>strategist</span>, <span className='social'>operationalist</span>, and <span className='physical'>athlete</span>. 

                
              </p>
            </article>
          </div>
            
          <div className='tile is-parent'>
            <article className="tile is-child notification is-dark">
              <p className="title"> <span className='artistic'> Strategist </span> </p>
              <p className="subtitle"></p>
              <div className="content">
                Strategist
              </div>
            </article>
          </div>
          
        </div>

        <div className="tile is-vertical flip">
          <div className='tile is-parent'>
            <article className="tile is-child notification is-dark pic-box">
                
                <figure className="image">
                  <img src="./images/ProfilePic.jpeg" alt='profile' className='profile-pic'/>
                </figure>
            </article>
            
          </div>
          <div className='tile is-parent'>
            <article className="tile is-child notification walden centroid">
              <div className="">
                <p className='titleMain'><strong>Walden, Chris</strong></p>
                <p className="subtitle"> - Nike Expert on Demand Specialist and life learner.</p>
                <div className="content">
                  North America Consumer Services | Nike Direct Digital Commerece
                </div>
              </div>
            </article>
          </div>
          
        </div>
      </span>

      <div className='tile is-4'>
        <div className="tile is-vertical">

          <div className='tile is-parent'>
            <article className='tile is-child notification is-dark'>
              <p className="title"> <span className='social'> Operationalist </span> </p>
              <p className="subtitle"> </p>
              <div className='content'>
                Operationalist
              </div>
            </article>
          </div>

          <div className='tile is-parent'>
            <article className="tile is-child notification is-dark">
              <p className="title"> <span className='physical'> Athlete </span> </p>
              <p className="subtitle"> </p>
              <div className='content'>
                Exercises to hack brain in order to increase learning. A high performance track athlete for 10+ years. High School State Champion. NCAA All-American. All-Pac12. 4:01 mile. 13:59 5k. 29:40 10k. Backpacking, cycling, and lifting are most enjoied modes.
              </div>
            </article>
          </div> 

        </div>
      </div>

    </div>
    
  </div>

export default About