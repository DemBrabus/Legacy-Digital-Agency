//
//MenuIcon
//

import React from 'react';
import './MenuIcon.scss';

export default function MenuIcon({ NavigationStatus, OpenNavigation, CloseNavigation }) {
    return (
        <div className='MenuIcon' 
            // onClick={ NavigationStatus !== true ? CloseNavigation : OpenNavigation}
            // onClick={ OpenNavigation }
            >
            <div className='MenuIcon-Inner'>
                <div className='MenuIcon-Bar MenuIcon-Bar1'></div>
                <div className='MenuIcon-Bar MenuIcon-Bar2'></div>
                <div className='MenuIcon-Bar MenuIcon-Bar3'></div>
            </div>
        </div>
    )
}