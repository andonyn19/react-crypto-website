import React from 'react';
import '../styles/Card.css';

import { FiArrowUpRight, FiArrowDown } from 'react-icons/fi'

function Card( { coin } ){
  console.log(coin)
  return(
    <>
      <div className='card'>
        <div className='top'>
          <img src={coin.image} alt='Bit'/>
        </div>

        <div>
          <h5>{coin.name} ({coin.symbol.toUpperCase()})</h5> 
          <p>$ {coin.current_price.toLocaleString()}</p>
        </div>
        {
          coin.market_cap_change_percentage_24h > 0 ? (
            <span className='green price'>
              <FiArrowUpRight /> {coin.market_cap_change_percentage_24h.toFixed(2)} %
            </span>
          ) : (
            <span className='red price'>
              <FiArrowDown /> {coin.market_cap_change_percentage_24h.toFixed(2)} %
            </span>
          )
        }
      </div>
    </>
  )
}

export default Card;