//
// About Team Image
//

import React from 'react';
import './AboutTeamImage.scss';
import { Link } from 'react-router-dom';

export default function AboutTeamImage() {
    return (
        <div className='About_Team-Image-Section'>
            <div className='About_Team-Image-Section-Inner'>
                <div className='About_Team-Image-BG'></div>
                <div className='About_Team-Image-BG-Cover'></div>
                <div className='About_Team-Image-Section-Content'>
                    <p className='About_Team-Image-Section-Content-Text'>
                        We do amazing
                    </p>
                    <p className='About_Team-Image-Section-Content-Text'>
                        things with amazing 
                    </p>
                    <p className='About_Team-Image-Section-Content-Text'>
                        people.
                    </p>

                    <div className='About_Team-Image-Section-SubText-Wrap'>
                        <Link to='/expertise' className='About_Team-Image-Section-SubText'>Explore what we do</Link>
                    </div>
                </div>
            </div>
        </div>
    )
}
