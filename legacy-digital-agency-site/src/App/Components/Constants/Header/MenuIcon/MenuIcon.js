//
//MenuIcon
//

import React from 'react';
import './MenuIcon.scss';

export default function MenuIcon({ NavStatus, HandleNav,}) {

    let Bar1Classes = 'MenuIcon-Bar MenuIcon-Bar1'
    let Bar2Classes = 'MenuIcon-Bar MenuIcon-Bar2'
    let Bar3Classes = 'MenuIcon-Bar MenuIcon-Bar3'

    if( NavStatus === true ){
        Bar1Classes = 'MenuIcon-Bar MenuIcon-Bar1 Bar1-Active'
        Bar2Classes = 'MenuIcon-Bar MenuIcon-Bar2 Bar2-Active'
        Bar3Classes = 'MenuIcon-Bar MenuIcon-Bar3 Bar3-Active'
    }


    return (
        <div className='MenuIcon' 
            onClick={ HandleNav }>
            <div className='MenuIcon-Inner'>
                <div className={Bar1Classes}></div>
                <div className={Bar2Classes}></div>
                <div className={Bar3Classes}></div>
            </div>
        </div>
    )
}