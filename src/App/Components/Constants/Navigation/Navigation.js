//
// Navigation
//

import React from 'react';
import './Navigation.scss';
import NavSiteLinks from './NavigationComps/SiteLinks/NavSiteLinks';
import NavInfo from './NavigationComps/Info/NavInfo';

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
