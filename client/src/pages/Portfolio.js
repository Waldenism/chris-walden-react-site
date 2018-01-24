import React from 'react'

const Portfolio = () =>
  <div className='section'>
    <div className='container'>
      <div className='contact animation-target'>

        <article className="media box">
          <figure className="media-left">
            <a href=''>
              <p className="image is-64x64">
                <img src='./images/surf.png' alt='mood-surfer' className='ittle-pic'/>
              </p>
            </a>
          </figure>

          <div className="media-content">
            <div className="content">
              <p>
                <strong> MoodSurfer </strong> - Mood tracking app.
                <br />
                <small>
                  survey and display mood over time flow 24-7
                </small>
              </p>
            </div>
          </div>
        </article>

        <article className="media box">
          <figure className="media-left">
            <a href=''>
              <p className="image is-64x64">
                <img src='./images/lunch.png' alt='lunch' className='ittle-pic'/>
              </p>
            </a>
          </figure>

          <div className="media-content">
            <div className="content">
              <p>
                <strong> LunchTime </strong> - Lunch ordering app.
                <br />
                <small>
                  Full Stack MERN app
                  code: github link
                </small>
              </p>
            </div>
          </div>
        </article>

        <article className="media box">
          <figure className="media-left">
            <a href=''>
              <p className="image is-64x64">
                <img src='./images/this.png' alt='this-site' className='ittle-pic'/>
              </p>
            </a>
          </figure>

          <div className="media-content">
            <div className="content">
              <p>
                <strong> This Portfolio Site </strong> - 
                <br />
                <small>
                  This site is a great example of a single page app using react.js and bulma
                </small>
              </p>
            </div>
          </div>
        </article>

        <article className="media box">
          <figure className="media-left">
            <a href=''>
              <p className="image is-64x64">
                <img src='./images/quiz.png' alt='quiz' className='ittle-pic'/>
              </p>
            </a>
          </figure>

          <div className="media-content">
            <div className="content">
              <p>
                <strong> TriviaGame </strong> - How's your esoteric knowlege?
                <br />
                <small>
                  code: github link
                </small>
              </p>
            </div>
          </div>
        </article>

        <article className="media box">
          <figure className="media-left">
            <a href=''>
              <p className="image is-64x64">
                <img src='./images/runner.png' alt='runner' className='ittle-pic'/>
              </p>
            </a>
          </figure>

          <div className="media-content">
            <div className="content">
              <p>
                <strong> RunLog </strong> - A running activity logging app.
                <br />
                <small>
                  coaching tool
                </small>
              </p>
            </div>
          </div>
        </article>

        <article className="media box">
          <figure className="media-left">
            <a href=''>
              <p className="image is-64x64">
                <img src='./images/ff.png' alt='FriendFinder' className='ittle-pic'/>
              </p>
            </a>
          </figure>

          <div className="media-content">
            <div className="content">
              <p>
                <strong> FriendFinder </strong> - Quasi-dating app.
                <br />
                <small>
                  survey to find others with similar intrests to you.
                </small>
              </p>
            </div>
          </div>
        </article>

      </div>
    </div>
  </div>
export default Portfolio