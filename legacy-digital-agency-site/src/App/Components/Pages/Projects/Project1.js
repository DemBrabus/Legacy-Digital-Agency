//
// Project Example Page
//

import React from 'react';
import './Project1.scss';
import './Intro/ProjectIntro';
import ProjectIntro from './Intro/ProjectIntro';
import ProjectText1 from './Text1/ProjectText1';
import ProjectBigImage from './BigImage/ProjectBigImage';
import ProjectText2 from './Text2/ProjectText2';
import ProjectText3 from './Text3/ProjectText3';
import ProjectDisplay from'../../../Assets/Projects/Project1/ProjectDisplay.jpg';
import ProjectNextProject from './NextProject/ProjectNextProject';

export default function Project1() {
    return (
        <div className='Project1'>
            <div className='Project1_Inner'>

                <ProjectIntro />

                <ProjectText1 />

                <ProjectBigImage />

                <ProjectText2 />

                <div className='Project_Display-Wrap'>
                    <img src={ProjectDisplay} className='Project_Display'/>
                </div>

                <ProjectText3 />

                <ProjectNextProject />

            </div>
        </div>
    )
}
