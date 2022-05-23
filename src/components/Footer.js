import React from 'react';

import { FaFacebook, FaGithub, FaLinkedin, FaLink } from 'react-icons/fa';
import '../styles/Footer.css';

function Footer() {
  return (
    <div className='footer'>
      <div className='container'>

        <div className='col col-1'>
          <h1>Crypto <span className='primary'>Stats</span> </h1>
        </div>

        <div className='col'>
          <h5>Support</h5>
          <span className='bar'></span>
            <a href='/'>Contact us</a>
            <a href='/'>Chat</a>
            <a href='/'>Help Center</a>
            <a href='/'>FAQ</a>
          
        </div>

        <div className='col'>
          <h5>Developers</h5>
          <span className='bar'></span>
            <a href='/'>Cloud</a>
            <a href='/'>Commerce</a>
            <a href='/'>Pro</a>
            <a href='/'>Api</a>
          
        </div>

        <div className='col'>
          <h5>Company</h5>
          <span className='bar'></span>
            <a href='/'>About</a>
            <a href='/'>Information</a>
            <a href='/'>Legal</a>
            <a href='/'>Privacy</a>
          
        </div>

        <div className='col'>
          <h5>Support</h5>
          <span className='bar'></span>
            <a href='/'><FaFacebook className='icon' /></a>
            <a href='/'><FaLinkedin className='icon' /></a>
            <a href='/'><FaGithub className='icon' /></a>
            <a href='/'><FaLink className='icon' /></a>
        </div>

      </div>
    </div>
  )
}

export default Footer;