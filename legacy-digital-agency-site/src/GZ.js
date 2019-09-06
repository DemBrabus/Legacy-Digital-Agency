//
// Main Component
//

//React --
import React, { Component } from 'react';
import { Route, Switch, Link } from 'react-router-dom';

//Styles --
import './App/Styles/Global.scss';
import './App/Styles/Variables.scss';

//Scripts --



//Pages --
import Home from './App/Components/Pages/Home/Home';
import About from './App/Components/Pages/About/About';


//Constants --
import Logo from './App/Components/Constants/Header/Logo/Logo';
import MenuIcon from './App/Components/Constants/Header/MenuIcon/MenuIcon';
import ScrollToTop from './App/Components/Constants/ScrollToTop/ScrollToTop';
import Navigation from './App/Components/Constants/Navigation/Navigation';

//Transitions --



export default class GZ extends Component {
  constructor(){
    super();
      this.state = {

      }
  }

  render() {
    return (
      <div className='GroundZero'>
        <ScrollToTop>

          <Logo />
          <MenuIcon />
          <Navigation />


          <Switch>

            <Route path='/' exact component={Home}/>
            <Route path='/about' exact component={About}/>

          </Switch>

        </ScrollToTop>
      </div>
    )
  }
}






