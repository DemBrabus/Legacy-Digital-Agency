//
// Project Intro
//

import React from 'react';
import './ProjectIntro.scss';

export default function ProjectIntro() {
    return (
        <div className='Project_Intro'>

            <div className='Project_Intro-BG'></div>
            <div className='Project_Intro-BG-Cover'></div>

            <div className='Project_Intro-Content-Wrap'>
                <div className='Project_Intro-Content-Wrap-Inner'>

                <p className='Project_Intro-Scroll'>SCROLL</p>

                <div className='Project_Intro-Info-Wrap'>
                    <p className='Project_Intro-Header'>Jannata</p>
                    <p className='Project_Intro-Header'>Resort</p>
                    <p className='Project_Intro-Description'>UI / UX, WEBSITE</p>
                    <p className='Project_Intro-Description'>BALI, 2019</p>
                </div>

                <div className='Project_Intro-Website-Wrap'>
                    <div className='Project_Intro-Website-Line'></div>
                    <p className='Project_Intro-Website'>VIEW WEBSITE</p>
                </div>

                </div>
            </div>


            
        </div>
    )
}
