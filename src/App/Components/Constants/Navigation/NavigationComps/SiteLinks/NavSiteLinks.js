//
// NavSiteLinks
//

import React from 'react';
import './NavSiteLinks.scss';
import { Link } from 'react-router-dom';

export default function NavSiteLinks() {
    return (
        <div className='NavSiteLinks'>

                <ul className='NavSiteLinks_List'>
                    <li className='NavSiteLinks-List-Item'>
                        <p className='NavSiteLinks-List-Item-Number'>01</p>
                        <Link to='/' className='NavSiteLinks_List-Item-Link'>HOME</Link>
                    </li>
                    <li className='NavSiteLinks-List-Item'>
                        <p className='NavSiteLinks-List-Item-Number'>02</p>
                        <Link to='/about' className='NavSiteLinks_List-Item-Link'>ABOUT</Link>
                    </li>
                    <li className='NavSiteLinks-List-Item'>
                        <p className='NavSiteLinks-List-Item-Number'>03</p>
                        <Link to='/works' className='NavSiteLinks_List-Item-Link'>WORKS</Link>
                    </li>
                    <li className='NavSiteLinks-List-Item'>
                        <p className='NavSiteLinks-List-Item-Number'>04</p>
                        <Link to='/expertise' className='NavSiteLinks_List-Item-Link'>EXPERTISE</Link>
                    </li>
                    <li className='NavSiteLinks-List-Item'>
                        <p className='NavSiteLinks-List-Item-Number'>05</p>
                        <Link to='/contact' className='NavSiteLinks_List-Item-Link'>CONTACT</Link>
                    </li>
                </ul>

        </div>
    )
}
