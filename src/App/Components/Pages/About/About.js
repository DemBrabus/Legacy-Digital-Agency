//
//About Page
//

import React from 'react'
import './About.scss';

import AboutIntro from './AboutComps/Intro/AboutIntro';
import AboutTeamImage from './AboutComps/TeamImage/AboutTeamImage';
import TeamImageMobile from './AboutComps/TeamImageMobile/TeamImageMobile';

export default function About() {
    return (
        <div className='About' id='About'>
            <div className='About_Inner'>
                <p className='About_Header'>Hello.</p>

                <AboutIntro />

                <AboutTeamImage />

                <TeamImageMobile />                    
                
            </div>
        </div>
    )
}
