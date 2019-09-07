//
//Expertise Page
//

import React from 'react';
import './Expertise.scss';

import ExpertiseBigImage from './BigImage/ExpertiseBigImage';

export default function Expertise() {
    return (
        <div className='Expertise'>
            <div className='Expertise_Inner'>

                <div className='Expertise_Header-Wrap'>
                    <p className='Expertise_Header'>We do amazing</p>
                    <p className='Expertise_Header'>things with</p>
                    <p className='Expertise_Header'>amazing</p>
                    <p className='Expertise_Header'>people.</p>
                </div>

                <div className='Expertise_Header-SubText-Wrap'>
                    <p className='Expertise_Header-SubText'>We have assembled an industry leading team of visual designers, UI + UX experts, full-stack developers and project managers. We consistently strive to be at the forefront of new media technology.</p>
                </div>

                <ExpertiseBigImage />

            </div>
        </div>
    )
}
