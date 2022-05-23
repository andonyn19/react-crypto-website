import React from 'react';
import '../styles/Earn.css';

import Crypto from '../assets/trade.png';

function Earn(){
  return (
    <div className='earn'>
      <div className='container'>
         
        {/* Left */}
        <div className='left'>
          <img src={Crypto} alt='Earn now'/>
        </div>

        {/* Right */}
        <div className='right'>
          <h2>Earn passive income with crypto.</h2>
          <p>Earn up to 12% annual rewards on 30+ digital assets. Simply hold your assets in the app to automatically earn rewards at the end of each month with no lockups and no limits.</p>
          
          <div className='input-container'>
            <input type='email'  placeholder='Enter you email'/>
            <button className='btn'>Earn more</button>
          </div>
        </div>
      </div>
    </div>
  )
} 

export default Earn;