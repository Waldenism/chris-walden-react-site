import React, { Component } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import Header from './components/Header'
import Footer from './components/Footer'

import About from './pages/About'
import Contact from './pages/Contact'
import Portfolio from './pages/Portfolio'
import Sundry from './pages/Sundry'

import './App.css'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      //stateful things
    }
    //this. fn = this. fn .bind(this)
  }

  render() {

    return (
      <Router>
        <div className='tody'>
          <div className='tontent'>
            <div className='tontent-inside'>

              <Header />

          
              <Route exact path='/' component={About} />
              <Route exact path='/about' component={About} />
              <Route exact path="/contact" component={Contact} />
              <Route exact path="/portfolio" component={Portfolio} />
              <Route exact path="/sundry" component={Sundry} />
            </div>
          </div>

          <Footer />

        </div>
      </Router>
    )

  }
}
export default App
