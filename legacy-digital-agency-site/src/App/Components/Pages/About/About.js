//
//About Page
//

import React from 'react'
import './About.scss';

//Images
import CompanyLogos from '../../../Assets/About/CompanyLogos.png';
import CompanyLogosMobile from '../../../Assets/About/CompanyLogoMobile.png';
import AwwwardsPosters from '../../../Assets/About/AboutAwardsPosters.png';
import AwwwardsPostersMobile from '../../../Assets/About/AboutAwardsPostersMobile.png';

//Components
import AboutIntro from './Intro/AboutIntro';
import AboutTeamImage from './TeamImage/AboutTeamImage';
import AboutTeamImageMobile from './TeamImageMobile/AboutTeamImageMobile';
import AboutServices from './Services/AboutServices';
import AboutAwardsText from './AwardsText/AboutAwardsText';

import Footer from '../../Reuseable/Footer/Footer';

export default function About() {
    return (
        <div className='About' id='About'>
            <div className='About_Inner'>

                <p className='About_Header'>Hello.</p>

                <AboutIntro />
                <AboutTeamImage />
                <AboutTeamImageMobile />       
                <AboutServices />    

                <div className='About_Company-Logos-Wrap'>
                    <img src={CompanyLogos} className='About_CompanyLogos'/>        
                    <img src={CompanyLogosMobile} className='About_CompanyLogosMobile'/>
                </div>

                <div className='About_Black-Section'>
                    <AboutAwardsText />
                    <img src={AwwwardsPosters} className='About_Awards-Posters'/>
                    <img src={AwwwardsPostersMobile} className='About_Awards-Posters-Mobile'/>
                </div>

                <Footer />
                        
            </div>
        </div>
    )
}
