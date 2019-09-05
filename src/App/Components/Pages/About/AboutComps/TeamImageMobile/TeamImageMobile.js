//
//Team Image Mobile
//

import React from 'react'
import './TeamImageMobile.scss';
import { Link } from 'react-router-dom';


export default function TeamImageMobile() {
    return (
        <div className='TeamImageMobile'>
            <p className='About_Team-Image-Section-Content-Text--Mobile'>
                    We do amazing
            </p>
            <p className='About_Team-Image-Section-Content-Text--Mobile'>
                things with amazing 
            </p>
            <p className='About_Team-Image-Section-Content-Text--Mobile'>
                people.
            </p>

            <div className='About_Team-Image-Section-SubText-Wrap--Mobile'>
                <Link to='/expertise' className='About_Team-Image-Section-SubText--Mobile'>Explore what we do</Link>
            </div>
        </div>
    )
}
