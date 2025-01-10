import React from 'react';
import Profile from '../assets/images/profile.jpg'
import '../assets/css/about.css';

function About() {
    return (
        <div className='about-container'>
            <div className='about-card'>
                <span>Hi 👋, I'm<span> Boray Gulpinar</span></span>
                <div className='profile-image'>
                    <img src={Profile} alt='Profile' />
                </div>
            </div>
        </div>
    );
}

export default About;