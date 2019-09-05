//
// Navigation
//

import React, { useRef, useEffect, useState } from 'react';
import { TimelineLite, TweenLite, Power1 } from 'gsap/all';
import './Navigation.scss';
import NavSiteLinks from './NavigationComps/SiteLinks/NavSiteLinks';
import NavInfo from './NavigationComps/Info/NavInfo';

export default function Navigation( { NavigationStatus } ) {

    // let Navigation = useRef(null);

    // (function(){
    //     const NavToggleTl = new TimelineLite();
    //         NavToggleTl
    //             .set(Navigation, .01, {display: 'block'})
    //             .to(Navigation, .8, {opacity: 1, ease: Power1.easeIn})
    //             ;
    //             NavToggleTl.pause();
    // }());

    
    // const handleOpenNav = () => {
    //     // NavToggleTl.play();
    //     TweenLite.set(Navigation, .01, {display: 'block'});
    //     TweenLite.to(Navigation, .8, {opacity: 1, ease: Power1.easeIn, delay: .5});
    // }
    // const handleCloseNav = () => {
    //     // NavToggleTl.reverse();
    //     TweenLite.to(Navigation, .8, {opacity: 0, ease: Power1.easeIn, delay: .5});
    //     TweenLite.set(Navigation, .01, {display: 'none'});
    // }

    let NavClasses = 'Navigation';
    if(NavigationStatus){
        NavClasses = 'Navigation NavigationActive';
    }



    return (
        <div ref = {el => Navigation = el} className='Navigation'>
            <div className='Navigation_Inner'>

                <div className='Navigation_Divide-Line'></div>

                    <NavSiteLinks />

                    <NavInfo />

            </div>
        </div>
    )
}
