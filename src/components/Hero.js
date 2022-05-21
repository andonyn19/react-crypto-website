import React from 'react';
import '../styles/Hero.css';
import Crypto from '../assets/hero-img.png';

function Hero() {
  return (
    <div className='hero'>
      <div className='container'>

        {/* Left side */}
        <div className='left'>
          <p>Buy & Sell Crypto 24/7 using your retirement account</p>
          <h1>Invest in Cryptocurrency With Your IRA</h1>
          <p>Buy, Sell, and store hundred of cryptocurrencies</p>
          <div className='input-container'>
            <input type='email' placeholder='Enter your email'/>
            <button className='btn'>Learn more</button>
          </div>
        </div>

        {/* Right side */}
        <div className='right'>
          <div className='img-container'>
            <img src={Crypto} alt='Hero'/>
          </div>
        </div>

      </div>
    </div>
  )

}

export default Hero;