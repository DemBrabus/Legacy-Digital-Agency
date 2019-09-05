//
// React Main App Component
//

//React --
import React, { Component, useRef } from 'react';
import { Route, Switch, Link } from 'react-router-dom';

//Styles --
import './Styles/Global.scss';
import './Styles/Variables.scss';

//Scripts --
import Test from './Scripts/Test';

//Pages --
import Home from './Components/Pages/Home/Home';
import About from './Components/Pages/About/About';
import Works from './Components/Pages/Works/Works';
import Contact from './Components/Pages/Contact/Contact';
import Expertise from './Components/Pages/Expertise/Expertise';
import Project1 from './Components/Pages/Projects/Project1/Project1';

//Constants --
import Logo from './Components/Constants/Header/Logo/Logo';
import MenuIcon from './Components/Constants/Header/MenuIcon/MenuIcon';
import Navigation from './Components/Constants/Navigation/Navigation';
import ScrollToTop from './Components/Constants/ScrollTop/ScrollToTop';



//Transitions --



export default class GroundZero extends Component {
    constructor(props){
        super(props);
        this.state = {
            NavStatus: false,
        }
    }

    

    render() {

        //Handle Navigation
        const OpenNavigation = () => {
          this.setState((prevState) => {
            return {NavStatus: !prevState.NavStatus}
            console.log(this.state.NavStatus);
            
          });
        }
        const CloseNavigation = () => {
            this.setState({ NavStatus: false });
            console.log(this.state.NavStatus);
        }

        return (
            <div className='GroundZero' id='GroundZero'>

                <ScrollToTop>

                    <Logo />
                    <MenuIcon 
                        NavigationStatus={this.state.NavStatus}
                        CloseNavigation={CloseNavigation}
                        OpenNavigation={OpenNavigation}
                    />
                    <Navigation 
                        NavigationStatus={this.state.NavStatus}
                    />

                    <div className='TempNav'>
                        <Link to='/' className='TempNav-Link'>Home</Link>
                        <Link to='/about' className='TempNav-Link'>About</Link>
                        <Link to='/works' className='TempNav-Link'>Works</Link>
                        <Link to='/expertise' className='TempNav-Link'>Expertise</Link>
                        <Link to='/contact' className='TempNav-Link'>Contact</Link>
                        <Link to='/project/jannata-resort' className='TempNav-Link'>Project</Link>
                    </div>



                
                    <Switch>

                        <Route path="/" exact component={Home}/>
                        <Route path="/about" component={About}/>
                        <Route path="/works" component={Works}/>
                        <Route path="/contact" component={Contact}/>
                        <Route path="/expertise" component={Expertise}/>
                        <Route path="/project/jannata-resort" component={Project1}/>

                    </Switch>

                </ScrollToTop>

            </div>
        )
    }
}
