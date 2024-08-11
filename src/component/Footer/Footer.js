import React from 'react';
import '../../style.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCopyright } from '@fortawesome/free-solid-svg-icons';
import { faTwitter, faFontAwesome, faFacebook, faInstagram, faYoutube, faLinkedin } from '@fortawesome/free-brands-svg-icons'


const Footer = () => {

    return (
        <section className='footlink'>
        <div className='container'>
            <div className='row'>
                <div className='col-md-12 col-lg-12 hh'>
                    <ul>
                        <li><a href='#home'>Home</a></li>
                        <li><a href='#reviews'>Reviews</a></li>
                        <li><a href='#faq'>FAQ</a></li>
                        <li><a href='#about'>About</a></li>
                    </ul>
                </div>
                
            </div>
            <div className='row'>
                <div className='col-md-12 col-lg-12'>
                    <ul className='iconfoot'>
                        <li><a href='#'><FontAwesomeIcon icon={faFacebook}/></a></li>
                        <li><a href='#'><FontAwesomeIcon icon={faTwitter}/></a></li>
                        <li><a href='#'><FontAwesomeIcon icon={faInstagram}/></a></li>
                        <li><a href='#'><FontAwesomeIcon icon={faYoutube}/></a></li>
                        <li><a href='#'><FontAwesomeIcon icon={faLinkedin}/></a></li>
                        
                    </ul>
                </div>
                <div>
                <h6>Designed And Developed By Rahma <FontAwesomeIcon icon={faCopyright}/>  2024</h6>
                </div>
                
            </div>

        </div>
        </section>

    )

}
export default Footer;