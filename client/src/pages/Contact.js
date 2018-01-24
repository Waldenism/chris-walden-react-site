import React from 'react'

const Contact = () =>
  <div className='section'>
    <div className='container'>
      <div className='contact animation-target'>

        <article className="media box ">
          <figure className="media-left">
            <a href='https://www.linkedin.com/in/waldenism/'>
              <p className="image is-64x64">
                <img src='./images/linkedIn.png' alt='linkedIn' className='ittle-pic'/>
              </p>
            </a>
          </figure>

          <div className="media-content">
            <div className="content">
              <p>
                <strong>linkedIn</strong> <small></small>
                <br />
                Connect with me on linkedIn. 
              </p>
            </div>
          </div>
        </article>

        <article className="media box ">

          <figure className="media-left">
            <a href='https://github.com/Waldenism'>
              <p className="image is-64x64">
                <img src='./images/github.png' alt='twitter' className='ittle-pic'/>
              </p>
            </a>
          </figure>

          <div className="media-content">
            <div className="content">
              <p>
                <strong>Github</strong> <small>waldenism</small>
                <br />
                Most of my projects go through github for ease of version control and sharing.
              </p>
            </div>
          </div>

        </article>

        <article className="media box ">

          <figure className="media-left">
            <a href='https://stackoverflow.com/users/8128375/c-walden?tab=profile'>
              <p className="image is-64x64">
                <img src='./images/stackoverflow.png' alt='stackoverflow' className='ittle-pic'/>
              </p>
            </a>
          </figure>

          <div className="media-content">
            <div className="content">
              <p>
                <strong>Stack Overflow</strong> <small>C. Walden</small>
                <br />
                My favorite place to help and get help from other developers.
              </p>
            </div>
          </div>

        </article>

        <article className="media box ">

          <figure className="media-left">
            <a href='https://twitter.com/SeaWx2'>
              <p className="image is-64x64">
                <img src='./images/twitter.png' alt='twitter' className='ittle-pic'/>
              </p>
            </a>
          </figure>

          <div className="media-content">
            <div className="content">
              <p>
                <strong>Twitter</strong> <small>@SeaWx2</small>
                <br />
                I used to have another twitter account, but I believe due to such duration of inactivity it was delted. I do not think twitter or news feeds in genearl are harmless.
              </p>
            </div>
          </div>

        </article>

        <article className="media box ">

          <figure className="media-left">
            <a href='https://publicsta.com/p/chrisplaysharp/3972360108'>
              <p className="image is-64x64">
                <img src='./images/insta.png' alt='instagram' className='ittle-pic'/>
              </p>
            </a>
          </figure>

          <div className="media-content">
            <div className="content">
              <p>
                <strong>Instagram</strong> <small>@chrisplaysharp</small>
                <br />
                This is my "Harp Account" I have a personal one you could follow too <small>@waldenism</small>
              </p>
            </div>
          </div>

        </article>

        <article className="media box ">
          <figure className="media-left">
            <a href=''>
              <p className="image is-64x64">
                <img src='./images/email.png' alt='email' className='ittle-pic'/>
              </p>
            </a>
          </figure>

          <div className="media-content">
            <div className="content">
              <p>
                <strong>Email</strong> - <span>cwaldenism@gmail.com</span>  
                <br />
                
                <div></div>
                - <small>cwalden@berkeley.edu (deprecated)</small> 
              </p>
            </div>
          </div>
        </article>

        <article className="media box ">
          <figure className="media-left">
            <a href=''>
              <p className="image is-64x64 email">
                <img src='./images/mail.png' alt='mailbox' className='ittle-pic'/>
              </p>
            </a>
          </figure>

          <div className="media-content">
            <div className="content">
              <p>
                <strong> USPS </strong> - Mail is one of the most secure and reliable forms of communication.
                <br />
                <small>
                  55 Fairmount Ave. 213<br />
                  Oakland, CA 94611
                </small>
              </p>
            </div>
          </div>
        </article>

      </div>
    </div>
  </div>

export default Contact