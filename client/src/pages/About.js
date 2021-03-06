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
                We are athletes this is what we believe. The best way to know how to serve an athlete is by being one, making sport a habit! As a high performance track athlete for 10+ years, Nike helped me to a lot: a High School State Championship, NCAA All-American, 4:01 mile, 13:59 5k, and a 66:55 Half-Marathon. Even was invited to the very first <strong>Brooks PR Invite </strong> in Seattle and met many life long companions, together in sport. This great life expereince has set me up well as a 
                 <span className='physical'> consumerist</span>, <span className='artistic'>operationalist</span>, and <span className='social'>strategist</span>.

                
              </p>
            </article>
          </div>
            
          <div className='tile is-parent'>
            <article className="tile is-child notification is-dark">
              <p className="title"> <span className='artistic'> Operationalist </span> </p>
              <p className="subtitle"></p>
              <div className="content">

                  The late Kobe Bryant - "The team that creates and dominates the momentum wins the game" -  Shannon Glass NDDC Summit

                  <br /><br />

                  Creating and sustaining momentum, begins with speed then closes with keeping control and staying a step ahead, without a single vulnerability in the fundamentals.  

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
                <p className="subtitle"> - Guru Field Rep - Portland</p>
                <div className="content">
                  - Brooks Running <br /> 

                  <p>
                    Flexes advanced computer literacy for professional excel, word, web documents. Avid learner with high energy and a great attitude. Desires to solve problems and improve upon existing methods. Approaches challenges from different angles, and yearns for collaboration with others to facilitate effective communication and service for runners. 
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
                <p>As a true consumerists obessesed with serving all runners with the same exemplarly treatment we give our Elite athletes, every interaction needs to be approached as if the member is meeting Brooks for the first time.</p>
                <p> With a deep connection to the brand getting served in the same way in my first big sports moments, I am uniquely equipped to pay it forward.</p>

              </div>
            </article>
          </div>

          <div className='tile is-parent'>
            <article className="tile is-child notification is-dark">
              <p className="title"> <span className='social'> Strategist </span> </p>
              <p className="subtitle"> </p>
              <div className='content'>
                 Strategizing as an Expert, comes in a cascade. Starting with leaderships yearly 3 year plan, on to quaterly, to monthly, to each week, day and member interaction. Staying tuned to seasonal product lines as they cool off and warm up, is essential in keeping runners engaged and re-engaging. 
              </div>
            </article>
          </div> 

        </div>
      </div>

    </div>
    
  </div>

export default About