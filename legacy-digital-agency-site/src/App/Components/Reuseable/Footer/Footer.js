//
// Footer
//

import React from 'react';
import './Footer.scss';

export default function Footer() {
    return (
        <div className='Footer'>
            
            <div className='Footer_BG'></div>

            <div className='Footer_Content'>
                <div className='Footer_Content-Inner'>

                    <p className='Footer_Content-Email'>Hello@Legacy.com</p>

                    <div className='Footer_Content-Info'>
                        <p className='Footer_Content-Info-Agency'>DIGITAL MEDIA AGENCY</p>
                        <p className='Footer_Content-Info-Address'>#47 Malta Square</p>
                        <p className='Footer_Content-Info-Address'>settimo milanese</p>
                        <p className='Footer_Content-Info-Address'>milano, 20019</p>
                        <p className='Footer_Content-Info-Address'>Italy</p>
                    </div>

                    <div className='Footer_Content-Info-Socials-Wrap'>
                        <p className='Footer_Content-Info-Social'>Fb</p>
                        <p className='Footer_Content-Info-Social'>Ig</p>
                        <p className='Footer_Content-Info-Social'>Tw</p>
                        <p className='Footer_Content-Info-Social'>In</p>
                        <p className='Footer_Content-Info-Social'>Terms</p>
                    </div>

                </div>
            </div>

        </div>
    )
}
