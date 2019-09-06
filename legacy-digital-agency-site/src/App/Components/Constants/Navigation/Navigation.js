//
// Navigation
//

import React from 'react';
import './Navigation.scss';
import NavSiteLinks from './SiteLinks/NavSiteLinks';
import NavInfo from './Info/NavInfo';

export default function Navigation() {
    return (
        <div className='Navigation'>
            <div className='Navigation_Inner'>

                <div className='Navigation_Divide-Line'></div>

                    <NavSiteLinks />

                    <NavInfo />

            </div>
        </div>
    )
}
