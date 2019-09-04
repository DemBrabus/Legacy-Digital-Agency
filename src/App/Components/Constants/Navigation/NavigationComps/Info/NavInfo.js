//
//Nav Info
//

import React from 'react';
import './NavInfo.scss';

export default function NavInfo() {
    return (
        <div className='NavInfo'>
            <div className='NavInfo_Inner'>

                <p className='NavInfo_Name'>LEGACY</p>
                <p className='NavInfo_Agency'>DIGITAL MEDIA AGENCY</p>

                <p className='NavInfo_Address'>#47 Malta Square</p>
                <p className='NavInfo_Address'>settimo milanese</p>
                <p className='NavInfo_Address'>milano, 20019</p>
                <p className='NavInfo_Address'>Italy</p>

                <div className='NavInfo_Links'>
                    <p className='NavInfo_Links-Link'>Fb</p>
                    <p className='NavInfo_Links-Link'>Ig</p>
                    <p className='NavInfo_Links-Link'>Tw</p>
                    <p className='NavInfo_Links-Link'>In</p>
                    <p className='NavInfo_Links-Link'>Terms</p>
                </div>

            </div>
        </div>
    )
}
