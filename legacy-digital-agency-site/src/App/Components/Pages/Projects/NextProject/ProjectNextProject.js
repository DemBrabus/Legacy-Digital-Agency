//
//Project Next Project
//

import React from 'react';
import './ProjectNextProject.scss';
import { Link } from 'react-router-dom';

export default function ProjectNextProject() {
    return (
        <div className='Project_NextProject'>

            <div className='Project_NextProject-BG'></div>

            <div className='Project_NextProject-Content'>
                <div className='Project_NextProject-Link-Wrap'>
                    <p className='Project_NextProject-Link-SubText'>Next Project:</p>
                    <Link to='/project/jannata-resort' className='Project_NextProject-Link'>Flo's Cafe</Link>
                </div>
            </div>
            
        </div>
    )
}
