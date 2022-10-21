import React, {Component} from 'react';
import {
  Route,
  Redirect,
  HashRouter
} from "react-router-dom";
import NavBar from '../pages/Navbar';
import About from '../pages/About';
import Contact from '../pages/Contact';
import Portfolio from '../pages/Portfolio';
import Resume from '../pages/Resume';

// Render header with profile img and name
class Header extends Component {
  render() {
    return (
      <HashRouter>
        <div className='row Header' id='header'>
          <h1>Ted Shishkovskiy Portfolio</h1>
          <NavBar/>
        </div>

        <div className='content'>
        <Route exact path="/" render={() => (<Redirect to="/About"/>)}/>
        <Route path="/about" component={About}/>
        <Route path="/portfolio" component={Portfolio}/>
        <Route path="/contact" component={Contact}/>
        <Route path="/resume" component={Resume}/>
        </div>
      </HashRouter>
    )
  }
}

export default Header;