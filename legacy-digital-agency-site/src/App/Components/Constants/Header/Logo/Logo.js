//
//Logo
//

import React from 'react';
import { Link } from 'react-router-dom';
import './Logo.scss';

export default function Logo({ NavStatus }) {

    let LogoClasses = 'Logo';
    if( NavStatus === true ){
        LogoClasses = 'Logo HideLogo'
    }

    return (
        <Link to='/'className={LogoClasses}>
            Legacy
        </Link>
    )
}
