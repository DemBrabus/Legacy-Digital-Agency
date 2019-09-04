//
//Home Page
//

import React, { useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Home.scss';
import { TweenMax, Power1 }from 'gsap/TweenMax';



export default function Home() {

    let Contact = useRef(null);

    useEffect(() => {

        console.log(Contact);
        
        // TweenMax.to(Contact, .5, {x: 100, ease: Power1.easeIn})

        }, [])

    return (
            <div className='Home' id='Home'>
                <div className='Home_Inner'>

                    <div className='Home_BG'>

                        <div className='Home_BG-Image' id='Home_BG-Image'></div>
                    </div>

                    <div className='Home_Content'>
                        <div className='Home_Content-Inner'>

                            

                            <div className='Home_Content-Header-Wrap'>
                                <p className='Home_Content-Tag' ref={el => Contact = el}>
                                    THE AGENCY
                                </p>
                                <p className='Home_Content-Header-Text'>
                                    We move the
                                </p>
                                <p className='Home_Content-Header-Text'>
                                    Digital Industry
                                </p>
                                <p className='Home_Content-Header-Text'>
                                    Forward
                                </p>
                            </div>

                            <Link to='/contact'  className='Home_Content-Contact'>CONTACT US</Link>
                            <Link to='/works' className='Home_Content-Works'>+ ALL WORKS</Link>

                        </div>

                    </div>
                </div>
            </div>
        )
}

            






