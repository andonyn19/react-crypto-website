import React, { useState, useEffect } from 'react'
import '../styles/Featured.css';

//import { FiArrowUpRight, FiArrowDown } from 'react-icons/fi'
import Card from './Card';

function Featured() {

  const URL = 'https://api.coingecko.com/api/v3/coins/markets?vs_currency=USD&order=market_cap_desc&per_page=6&page=1&sparkline=false';
  
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch(URL)
      .then(res => res.json())
      .then(data => setData(data))
  }, [])

  return (
    <div className='featured'>
      <div className='container'>

        {/* Left side */}
        <div className='left'>
          <h2>Explore top Crypto's Like BTC, ETH, and Doge</h2>
          <p>See all available assets: Cryptocurrencies and NFT's</p>
          <button className='btn'>See more coins</button>
        </div>

        {/* Right side */}
        <div className='right'>
          
          {
            data.map(currency => {
              return (
                <Card 
                  key = {currency.market_cap_rank}
                  coin = {currency}
                />
              )
            })
          }
        
        </div>

      </div>
    </div>
  )
}

export default Featured;