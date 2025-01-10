import MailOutlineIcon from '@mui/icons-material/MailOutline';
import XIcon from '@mui/icons-material/X';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import HomeIcon from '@mui/icons-material/Home';
import PictureAsPdfIcon from '@mui/icons-material/PictureAsPdf';
import resume from '../assets/pdf/alp-boray-gulpinar-resume.pdf'
import React from 'react';
import '../assets/css/header.css'

function Header() {
    return (
        <header>
            <div className='container'>
                <div className='left-container'>
                    <a className='resume' href={resume} target='_blank'>
                        <span>Resume</span>
                        <PictureAsPdfIcon style={{ marginLeft: "5px", fontSize: "20px" }} />
                    </a>
                </div>

                <div className='right-container'>
                    <a href='mailto:boray112@gmail.com'><MailOutlineIcon /></a>
                    <a href='https://x.com/borayxd' target='_blank' className='social'><XIcon /></a>
                    <a href='https://www.instagram.com/boraygulpinar/' target='_blank' className='social'><InstagramIcon /></a>
                    <a href='https://www.linkedin.com/in/boray-gulpinar/' target='_blank' className='social'><LinkedInIcon /></a>
                    <a href='https://github.com/boraygulpinar' target='_blank' className='social'><GitHubIcon /></a>
                </div>
            </div>
        </header>
    );
}

export default Header;
