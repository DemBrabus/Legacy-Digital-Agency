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

        }
    }
    render() {
    return (
            <div className='Works'>

                <div className='Works_BG-Project-Image-Wrap'>
                    <div className='Works_BG-Project-Image-Wrap-Inner'>
                        <div className='Works_BG-Project-Image Works_BG-Project-Image-1'></div>
                        <div className='Works_BG-Project-Image Works_BG-Project-Image-2'></div>
                        <div className='Works_BG-Project-Image Works_BG-Project-Image-3'></div>
                        <div className='Works_BG-Project-Image Works_BG-Project-Image-4'></div>
                        <div className='Works_BG-Project-Image Works_BG-Project-Image-5'></div>
                    </div>
                </div>

                <div className='Works_Project-Links-Wrap'>
                    <div className='Works_Project-Links-Inner'>
                        <ul className='Works-Project-Link-List'>
                            <li className='Works_Project-Link-List-Item'>
                                <p className='Works_Project-Link-Number'>01</p>
                                <Link to='/project/jannata-resort' className='Works_Project-Link'>Samsara Resort</Link>
                                <p className='Works_Project-Link-Description'>UI / UX, WEBSITE - BALI, 2019</p>
                            </li>
                            <li className='Works_Project-Link-List-Item'>
                                <p className='Works_Project-Link-Number'>02</p>
                                <Link to='/project/jannata-resort' className='Works_Project-Link'>Jannata Resort</Link>
                                <p className='Works_Project-Link-Description'>UI / UX, WEBSITE - BALI, 2018</p>
                            </li>
                            <li className='Works_Project-Link-List-Item'>
                                <p className='Works_Project-Link-Number'>03</p>
                                <Link to='/project/jannata-resort' className='Works_Project-Link'>The Relationshft</Link>
                                <p className='Works_Project-Link-Description'>UI / UX, APP - Amsterdam 2015</p>
                            </li>
                            <li className='Works_Project-Link-List-Item'>
                                <p className='Works_Project-Link-Number'>04</p>
                                <Link to='/project/jannata-resort' className='Works_Project-Link'>Korko</Link>
                                <p className='Works_Project-Link-Description'>BRANDING, JAPAN 2018</p>
                            </li>
                            <li className='Works_Project-Link-List-Item'>
                                <p className='Works_Project-Link-Number'>05</p>
                                <Link to='/project/jannata-resort' className='Works_Project-Link'>Apprentice Search</Link>
                                <p className='Works_Project-Link-Description'>UI / UX - ONTARIO, 2016</p>
                            </li>
                        </ul>
                        
                    </div>
                </div>


            </div>
        )
    }
}



