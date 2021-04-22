import React, { Component } from 'react';
import '../navbar/Navbar.css';
import { Link } from 'react-router-dom';
import SearchIcon from '../../assets/images/searchicon_ui.png';
import Facebook from '../../assets/images/social-media/facebook.jpg';
import Instagram from '../../assets/images/social-media/instagram.jpg';
import Twitter from '../../assets/images/social-media/twitter.jpg';
import LinkedIn from '../../assets/images/social-media/linkedin.jpg';
//font-family: Red Hat Display;
//List of tasks to do:
/*
add search icon

*/
class Navbar extends Component {
    render() {
        return (
            <div className="Navbar">
                <div><img class='Logo' src='https://minorityprogrammers.com/assets/images/mp_gradient_rock.svg' /></div>

                <div className='SocialMediaContainers'>
                    <a href="https://twitter.com/minorityprogram" target='_blank'><img alt='Twitter' className='Twitter' src={Twitter} /></a>

                    <a href="https://www.facebook.com/MinorityProgrammers"><img className='Face' alt='Facebook' src={Facebook} /></a>

                    <a href="https://www.linkedin.com/company/minority-programmers/" target='_blank'><img alt='LinkedIn' className='LinkedIn' src={LinkedIn} /></a>


                    <a href="https://www.instagram.com/minorityprogrammers/" target='_blank'><img alt='Instagram' className='Instagram' src={Instagram} /></a>
                </div>
                <div class='Connectwallet'><a >Connect Wallet</a></div>


                <div className='Nav-bar'>
                    <ul className="Nav-Links">
                        <li className='Links'>
                            <p>Service</p>
                        </li>
                        <li className='Links'>
                            <p>Events</p></li>
                        <li className='Links'>
                            <p>Learn</p>
                        </li>
                        <li className='Links'>
                            <p>Service</p>
                        </li>
                    </ul>

                </div>
                <div class='Ellipse2'><img alt='SearchIcon' src={SearchIcon} /></div>


            </div >

        )
    }
}

export default Navbar;