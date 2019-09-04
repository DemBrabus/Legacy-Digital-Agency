//
// React Main App Component
//

//React --
import React, { Component } from 'react';
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



//Transitions --



export default class GroundZero extends Component {
    constructor(props){
        super(props);
        this.state = {

        }
    }

    render() {
        return (
            <div className='GroundZero' id='GroundZero'>

                    <Logo />
                    <MenuIcon />
                    <Navigation />


                
                    <Switch>

                        <Route path="/" exact component={Home}/>
                        <Route path="/about" exact component={About}/>
                        <Route path="/works" exact component={Works}/>
                        <Route path="/contact" exact component={Contact}/>
                        <Route path="/expertise" exact component={Expertise}/>
                        <Route path="/project/jannata-resort" exact component={Project1}/>

                    </Switch>


            </div>
        )
    }
}
