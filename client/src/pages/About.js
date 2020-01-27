import React from 'react'

const About = () =>
  <div className='section'>

    <div className="tile is-ancestor">

      <span className='tile is-8 flex'>
        <div className="tile is-vertical">

          <div className='tile is-parent'>
            <article className="tile is-child notification is-dark">
              <p className="title"> <span className='intellectual'> Athlete </span> </p>
              <p className="subtitle"></p>
              <p className="content">
                We are Nike athletes this is what we believe. The best way to know how to serve an athlete is by being one, making sport habit! As a high performance track athlete for 10+ years, Nike helped me to a lot: a High School State Championship, NCAA All-American, All-Pac12, 4:01 mile, 13:59 5k, 29:40 10k, and a 66:55 Half-Marathon. This great life expereince has set me up well as a 
                 <span className='physical'> consumerist</span>, <span className='artistic'>operationalist</span>, and <span className='social'>strategist</span>.

                
              </p>
            </article>
          </div>
            
          <div className='tile is-parent'>
            <article className="tile is-child notification is-dark">
              <p className="title"> <span className='artistic'> Operationalist </span> </p>
              <p className="subtitle"></p>
              <div className="content">

                  <br />

                  The late Kobe Bryant - "The team that creates and dominates the momentum wins the game" -  Shannon Glass NDDC Summit

                  <br /><br />

                  As an NEOD operationalist one must be supremely aware of how to create momentum, and how to sustain it. First, creation begins with speed. Speed encompases keeping as many resources readily available as possible. As a Nike Expert I have promoted good practices of advanced and expedient computer navigation and usage, hard copies for team of current weeks launch styles. 
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
                <p className='titleMain'><strong>Chris Walden</strong></p>
                <p className="subtitle"> - Nike Expert on Demand Specialist</p>
                <div className="content">
                  - North America Consumer Services <br /> 
                  - Nike Direct Digital Commerece <br /><br />

                  <p>Distinctions: 
                    <ul> 
                      <li> Stamina - AJ11 Bred  </li>
                      <li> Unbreakable Relationships </li>
                      <li> Community Outreach </li>
                    </ul>
                  </p>

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
              <p className="title"> <span className='physical'> Consumerist </span> </p>
              <p className="subtitle"> </p>
              <div className='content'>
                Consumerist
              </div>
            </article>
          </div>

          <div className='tile is-parent'>
            <article className="tile is-child notification is-dark">
              <p className="title"> <span className='social'> Strategist</span> </p>
              <p className="subtitle"> </p>
              <div className='content'>
                 strategist
              </div>
            </article>
          </div> 

        </div>
      </div>

    </div>
    
  </div>

export default About