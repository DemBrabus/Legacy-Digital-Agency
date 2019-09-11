//
// Works Page
//

import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Works.scss';


export default class Works extends Component {
    constructor(props){
        super(props);
        this.state = {
            ActiveProject : 0
        }
    }    

    Project0Active = this.Project0Active.bind(this);
    Project1Active = this.Project1Active.bind(this);
    Project2Active = this.Project2Active.bind(this);
    Project3Active = this.Project3Active.bind(this);
    Project4Active = this.Project4Active.bind(this);
    Project5Active = this.Project5Active.bind(this);


    //Handle Project In Focus --
        Project0Active(e){
            this.setState({
                ActiveProject: 0
            });
        }
        Project1Active(e){
            this.setState({
                ActiveProject: 1
            });
        }
        Project2Active(e){
            this.setState({
                ActiveProject: 2
            });
        }
        Project3Active(e){
            this.setState({
                ActiveProject: 3
            });
        }
        Project4Active(e){
            this.setState({
                ActiveProject: 4
            });
        }
        Project5Active(e){
            this.setState({
                ActiveProject: 5
            });
        }

    
    render() {

        //Image Container Classes
            let Project1Image = 'Works_BG-Project-Image Works_BG-Project-Image-1';
            let Project2Image = 'Works_BG-Project-Image Works_BG-Project-Image-2';
            let Project3Image = 'Works_BG-Project-Image Works_BG-Project-Image-3';
            let Project4Image = 'Works_BG-Project-Image Works_BG-Project-Image-4';
            let Project5Image = 'Works_BG-Project-Image Works_BG-Project-Image-5';

        if(this.state.ActiveProject === 1){
            Project1Image = 'Works_BG-Project-Image Works_BG-Project-Image-1 ProjectBG-Active'
        }
            if(this.state.ActiveProject === 2){
                Project2Image = 'Works_BG-Project-Image Works_BG-Project-Image-2 ProjectBG-Active'
            }
                if(this.state.ActiveProject === 3){
                    Project3Image = 'Works_BG-Project-Image Works_BG-Project-Image-3 ProjectBG-Active'
                }
            if(this.state.ActiveProject === 4){
                Project4Image = 'Works_BG-Project-Image Works_BG-Project-Image-4 ProjectBG-Active'
            }
        if(this.state.ActiveProject === 5){
            Project5Image = 'Works_BG-Project-Image Works_BG-Project-Image-5 ProjectBG-Active'
        }

        //List Item Classes
            let ListItem1 = 'Works_Project-Link-List-Item';
            let ListItem2 = 'Works_Project-Link-List-Item';
            let ListItem3 = 'Works_Project-Link-List-Item';
            let ListItem4 = 'Works_Project-Link-List-Item';
            let ListItem5 = 'Works_Project-Link-List-Item';

                //List Item 1 Active
                if(this.state.ActiveProject === 1){
                    ListItem2 = 'Works_Project-Link-List-Item HideItem';
                    ListItem3 = 'Works_Project-Link-List-Item HideItem';
                    ListItem4 = 'Works_Project-Link-List-Item HideItem';
                    ListItem5 = 'Works_Project-Link-List-Item HideItem';
                }

                    //List Item 2 Active
                    if(this.state.ActiveProject === 2){
                        ListItem1 = 'Works_Project-Link-List-Item HideItem';
                        ListItem3 = 'Works_Project-Link-List-Item HideItem';
                        ListItem4 = 'Works_Project-Link-List-Item HideItem';
                        ListItem5 = 'Works_Project-Link-List-Item HideItem';
                    }

                        //List Item 3 Active
                        if(this.state.ActiveProject === 3){
                            ListItem1 = 'Works_Project-Link-List-Item HideItem';
                            ListItem2 = 'Works_Project-Link-List-Item HideItem';
                            ListItem4 = 'Works_Project-Link-List-Item HideItem';
                            ListItem5 = 'Works_Project-Link-List-Item HideItem';
                        }

                //List Item 4 Active
                if(this.state.ActiveProject === 4){
                    ListItem1 = 'Works_Project-Link-List-Item HideItem';
                    ListItem2 = 'Works_Project-Link-List-Item HideItem';
                    ListItem3 = 'Works_Project-Link-List-Item HideItem';
                    ListItem5 = 'Works_Project-Link-List-Item HideItem';
                }

            //List Item 5 Active
            if(this.state.ActiveProject === 5){
                ListItem1 = 'Works_Project-Link-List-Item HideItem';
                ListItem2 = 'Works_Project-Link-List-Item HideItem';
                ListItem3 = 'Works_Project-Link-List-Item HideItem';
                ListItem4 = 'Works_Project-Link-List-Item HideItem';
            }


        
    return (
            <div className='Works' >
                <div className='Works_Inner'>

                    <div className='Works_BG-Project-Image-Wrap'>
                        <div className='Works_BG-Project-Image-Wrap-Inner'>
                            <div className={Project1Image}></div>
                            <div className={Project2Image}></div>
                            <div className={Project3Image}></div>
                            <div className={Project4Image}></div>
                            <div className={Project5Image}></div>
                        </div>
                    </div>

                    <div className='Works_Project-Links-Wrap'>
                        <div className='Works_Project-Links-Inner'>
                            <ul className='Works_Project-Link-List'>
                                <li className='Works_Project-Link-List-Item-Disclaimer'>
                                    <p className='Works_Project-Link-List-Item-Disclaimer-Text'>*ALL PROJECT LINKS LEAD TO JANNATA RESORT</p>
                                </li>
                                <li className={ListItem1}>
                                    <p className='Works_Project-Link-Number'>01</p>
                                    <Link to='/project/jannata-resort' className='Works_Project-Link' onMouseOver={this.Project1Active} onMouseLeave={this.Project0Active}>Samsara Resort</Link>
                                    <p className='Works_Project-Link-Description'>UI / UX, WEBSITE - BALI, 2019</p>
                                </li>
                                <li className={ListItem2} >
                                    <p className='Works_Project-Link-Number'>02</p>
                                    <Link to='/project/jannata-resort' className='Works_Project-Link' onMouseOver={this.Project2Active} onMouseLeave={this.Project0Active}>Jannata Resort</Link>
                                    <p className='Works_Project-Link-Description'>UI / UX, WEBSITE - BALI, 2018</p>
                                </li>
                                <li className={ListItem3}>
                                    <p className='Works_Project-Link-Number'>03</p>
                                    <Link to='/project/jannata-resort' className='Works_Project-Link' onMouseOver={this.Project3Active} onMouseLeave={this.Project0Active}>Flo's Cafe</Link>
                                    <p className='Works_Project-Link-Description'>UI / UX, APP - UNITED STATES, 2015</p>
                                </li>
                                <li className={ListItem4}>
                                    <p className='Works_Project-Link-Number'>04</p>
                                    <Link to='/project/jannata-resort' className='Works_Project-Link' onMouseOver={this.Project4Active} onMouseLeave={this.Project0Active}>Korko</Link>
                                    <p className='Works_Project-Link-Description'>BRANDING, JAPAN 2018</p>
                                </li>
                                <li className={ListItem5}>
                                    <p className='Works_Project-Link-Number'>05</p>
                                    <Link to='/project/jannata-resort' className='Works_Project-Link' onMouseOver={this.Project5Active} onMouseLeave={this.Project0Active}>Apprentice Search</Link>
                                    <p className='Works_Project-Link-Description'>UI / UX - ONTARIO, 2016</p>
                                </li>
                            </ul>
                        </div>
                    </div>

                </div>
            </div>
        )
    }
}



