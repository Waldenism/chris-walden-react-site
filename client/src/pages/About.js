import React from 'react'

const About = () =>
  <div className='section'>

    <div className="tile is-ancestor">

      <div className="tile is-vertical">

        <div className='tile is-parent'>
          <article className="tile is-child notification is-dark">
            <p className="title"> <span className='intellectual'> Intellectual </span> </p>
            <p className="subtitle"></p>
            <p className="content">
              An aspiring polymath, actively strives to develop capacity across multiple unrealated academic fields and in all areas of human accomplishment: <span className='intellectual'>intellectual</span>, <span className='artistic'>artistic</span>, <span className='social'>social</span>, and <span className='physical'>physical</span>. 

              Knowleges in: law, logic, math, business, government, justice, physics, philosophy, electronic engineering, computer science, algorithmic puzzles, music, geography, sociology, biology, science, psycology, art, and more.
            </p>
          </article>
        </div>
          
        <div className='tile is-parent'>
          <article className="tile is-child notification is-dark">
            <p className="title"> <span className='artistic'> Artistic </span> </p>
            <p className="subtitle"></p>
            <div className="content">
              Music (as a creator) I play the Harp, I dabble in ukulele, theory, composition, production, keyboards, DJ, synthesizers, and hip-hop. Music (as a consumer) I listen to a wide range of genres including but not limited to: electronic, video game music, hip-hop, tech-house, reggae, classical, and Indian classical. My favorites acts are Daft Punk, Migos, and Bach. 
            </div>
          </article>
        </div>
        
      </div>

      <div className="tile is-vertical">
        <div className='tile is-parent animation-target'>
          <article className="tile is-child notification walden centroid">
            <div className="">
              <p className='titleMain'><strong>Walden, Chris</strong></p>
              <p className="subtitle"> - Full-Stack software engineer and life learner.</p>
              <div className="content">
                Likes javascript, mac, and git. More about me is distributed through out this site, welcome.
              </div>
            </div>
          </article>
        </div>
        <div className='tile is-parent'>
          <article className="tile is-child notification is-dark pic-box">
              
              <figure className="image">
                <img src="./images/ProfilePic.jpeg" alt='profile' className='profile-pic'/>
              </figure>
          </article>
        </div>
        
      </div>



      <div className="tile is-vertical">

        <div className='tile is-parent'>
          <article className="tile is-child notification is-dark">
            <p className="title"> <span className='social'> Social </span> </p>
            <p className="subtitle"> </p>
            <div className='content'>
              Not too sure what it means to achieve highly socially, but reach out, talk to others about what you are into, they want to know. Be spontaneous, and cherish the precense and company of all whom you may pass. Do good. Strive to leave this place better than you found it.  
            </div>
          </article>
        </div>

        <div className='tile is-parent'>
          <article className="tile is-child notification is-dark">
            <p className="title"> <span className='physical'> Physical </span> </p>
            <p className="subtitle"> </p>
            <div className='content'>

              Exercises to hack brain in order to increase learning. A high performance track athlete for 10+ years. High School State Champion. NCAA All-American. All-Pac12. 4:01 mile. 13:59 5k. Still push body. Backpacking, cycling, and lifting are most enjoied modes.  
            </div>
          </article>
        </div>

        

      </div>

    </div>
    
  </div>

export default About