import React, { Component } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import Header from './components/Header'
import Footer from './components/Footer'

import About from './pages/About'
import Contact from './pages/Contact/Contact'
import Portfolio from './pages/Portfolio/Portfolio'
import Sundry from './pages/Sundry'
import Harp from './pages/Sundry/Harp'
import Gamer from './pages/Sundry/Gamer'
import Blog from './pages/Sundry/Blog'

import './App.css'

class App extends Component {

  render() {

    return (
      <Router>
        <div className='tody'>
          <div className='tontent'>
            <div className='tontent-inside'>

              <Header />
          
              <Route exact path='/' component={About} />
              <Route path='/about' component={About} />
              <Route path='/contact' component={Contact} />
              <Route path='/portfolio' component={Portfolio} />
              <Route path='/sundry' component={Sundry} />
              <Route path='/harp' component={Harp} />
              <Route path='/gamer' component={Gamer} />
              <Route path='/blog' component={Blog} />
            </div>
          </div>

          <Footer />

        </div>
      </Router>
    )

  }
}
export default App
