//
//About Intro
//

import React from 'react';
import './AboutIntro.scss';
import AWWWBadge from '../../../../../Assets/About/AwwwardsAward.png';

export default function AboutIntro() {
    return (
        <div className='About_Intro'>
            <div className='About_Intro-Section-Title-Wrap'>
                <p className='About_Intro-Section-Text Section-Text-Title'>
                    We are Legacy. We create
                </p>
                <p className='About_Intro-Section-Text Section-Text-Title'>
                    Award-winning websites,
                </p>
                <p className='About_Intro-Section-Text Section-Text-Title'>
                    remarkable brands and
                </p>
                <p className='About_Intro-Section-Text Section-Text-Title'>
                    Cutting-edge apps.
                </p>
            </div>

            <div className='About_Intro-Section-Text-Text-Wrap'>
                <p className='About_Intro-Section-Text Section-Text-Text'>
                    Founded in 2010, Legacy has become one of the best quality Digital Agency in Italy. Our focus has always been to create enjoyable, intuitive, engaging and remarkable experiences for people - that's what sets us apart from everyone else.
                </p>
                <img src={AWWWBadge} className='About_Intro-Section-AwwwardsBadge'/>
            </div>
        </div>
    )
}
