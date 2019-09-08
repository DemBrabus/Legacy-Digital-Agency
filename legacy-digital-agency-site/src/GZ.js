//
// Main Component
//

//React --
import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';

//Styles --
import './App/Styles/Global.scss';
import './App/Styles/Variables.scss';

//Scripts --



//Pages --
import Home from './App/Components/Pages/Home/Home';
import About from './App/Components/Pages/About/About';
import Works from './App/Components/Pages/Works/Works';
import Expertise from './App/Components/Pages/Expertise/Expertise';
import Contact from './App/Components/Pages/Contact/Contact';


//Constants --
import Logo from './App/Components/Constants/Header/Logo/Logo';
import MenuIcon from './App/Components/Constants/Header/MenuIcon/MenuIcon';
import ScrollToTop from './App/Components/Constants/ScrollToTop/ScrollToTop';
import Navigation from './App/Components/Constants/Navigation/Navigation';


//Transitions --



export default class GZ extends Component {
  constructor(props){
    super(props);
      this.state = {
        NavStatus: false
      }
  }




  //Handle Nav State --
    HandleNav = this.HandleNav.bind(this);
    HandleNav(e){
      this.setState((prevState) => {
        return {NavStatus: !prevState.NavStatus}
      });
      
    }


  


  render() {
    return (
      <ScrollToTop>
        <div className='GroundZero'>

            <Logo NavStatus={this.state.NavStatus}
                  />
            <MenuIcon NavStatus={this.state.NavStatus}
                      HandleNav={this.HandleNav}
                    />
            <Navigation NavStatus={this.state.NavStatus}
                        HandleNav={this.HandleNav}
                      />

            <div className='GZ_Page-Container'>
                <Switch>

                  <Route path='/' exact component={Home}/>
                  <Route path='/about' exact component={About}/>
                  <Route path='/works' exact component={Works}/>
                  <Route path='/expertise' exact component={Expertise}/>
                  <Route path='/contact' exact component={Contact}/>

                </Switch>
            </div>

        </div>
      </ScrollToTop>
    )
  }
}






