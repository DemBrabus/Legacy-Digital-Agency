//
// Navigation
//

import React from 'react';
import './Navigation.scss';
import NavSiteLinks from './SiteLinks/NavSiteLinks';
import NavInfo from './Info/NavInfo';

export default function Navigation({ NavStatus, HandleNav }) {

    let NavClasses = 'Navigation';
    if( NavStatus === true ){
        NavClasses = 'Navigation NavigationActive'
    }


    return (
        <div className={NavClasses}>
            <div className='Navigation_Inner'>

                <div className='Navigation_Divide-Line'></div>

                <NavSiteLinks HandleNav={HandleNav}/>

                <NavInfo />

            </div>
        </div>
    )
}
