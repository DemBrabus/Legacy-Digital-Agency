//
// Contact Page
//

import React from 'react';
import './Contact.scss';

export default function Contact() {
    return (
        <div className='Contact'>
            <div className='Contact_Inner'>

                <p className='Contact_Header'>Let's Connect!</p>

                <div className='Contact_Info-Form-Wrap'>
                    <div className='Contact_Info-Wrap'>
                        <p className='Contact_Info-Title'>Phone:</p>
                            <p className='Contact_Info-Text'>+(212) 678 4321</p>
                        <p className='Contact_Info-Title'>Email:</p>
                            <p className='Contact_Info-Text'>Welcome@Legacy.com</p>
                    </div>

                    <div className='Contact_Form-Wrap'>
                        <form className='Contact_Form'>
                            <div className='Contact_Form-Row1'>
                                <input  className='Contact_Form-Input Contact_Form-Input-Name' type='name' name='name' placeholder='Your name'/>
                                <input className='Contact_Form-Input Contact_Form-Input-Email' type='email' name='email' placeholder='Your email'/>
                            </div>
                            <div className='Contact_Form-Row2'>
                                <input className='Contact_Form-Input Contact_Form-Input-Message' type='textarea' name='message' placeholder='Type your message'/>
                                <button type='reset' className='Contact_Form-Button'>Send!</button>
                            </div>
                        </form>
                    </div>
                </div>

            </div>
        </div>
    )
}
