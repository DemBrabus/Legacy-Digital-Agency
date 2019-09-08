//
// Project Example Page
//

import React from 'react';
import './Project1.scss';
import './Intro/ProjectIntro';
import ProjectIntro from './Intro/ProjectIntro';
import ProjectText1 from './Text1/ProjectText1';
import ProjectBigImage from './BigImage/ProjectBigImage';

export default function Project1() {
    return (
        <div className='Project1'>
            <div className='Project1_Inner'>

                <ProjectIntro />

                <ProjectText1 />

                <ProjectBigImage />

            </div>
        </div>
    )
}
