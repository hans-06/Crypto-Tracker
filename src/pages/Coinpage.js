import axios from 'axios';
import React from 'react'
import { useParams } from 'react-router-dom'
import { useState, useEffect } from 'react';
import { CryptoState } from '../CryptoContext';
import { SingleCoin } from '../config/api';
import CoinInfo from '../components/CoinInfo';
import { customStyles } from '../Style';
import { LinearProgress, Typography } from '@mui/material';
import { numberWithCommas } from '../components/Carousel';
// import ReactHtmlParser from "react-html-parser"



const Coinpage = () => {
  const {id} = useParams();
  const [coin, setCoin] = useState()

  const {currency, symbol} = CryptoState();

  const fetchCoin = async () => {
    const { data } = await axios.get(SingleCoin(id));

    setCoin(data);
    console.log(data);
  }
  // console.log(coin);

  useEffect(() => {
    fetchCoin();
  }, [currency]);
  
  if(!coin)return <LinearProgress sx={{backgroundColor: "gold"}}/>

  return (
    <div style={customStyles.coinpageCont}>
      <div style={customStyles.coinpageSidebar}>
        <img 
        src= {coin?.image.large} 
        alt= {coin?.name}
        height="200"
        style={{marginBottom: 20}} 
        />
        <Typography variant='h3' sx={customStyles.coinpageHeading}>
          {coin?.name}
        </Typography>
        <Typography variant='subtitle1' sx={customStyles.description}>
          {(coin?.description.en.split(". ")[0])}.
        </Typography>
        <div style={customStyles.marketData}>
          <span style={{display: 'flex'}}>
            <Typography variant='h5'sx={customStyles.marketDataHead}>
              Rank:
            </Typography>
            &nbsp; &nbsp;
            <Typography variant='h5' sx={{fontFamily: "Montserrat"}}>
              {coin?.market_cap_rank}
            </Typography>
          </span>
          <span style={{display: 'flex'}}>
            <Typography variant='h5'sx={customStyles.marketDataHead}>
              Current Price:
            </Typography>
            &nbsp; &nbsp;
            <Typography variant='h5' sx={{fontFamily: "Montserrat"}}>
              {symbol}{" "}
              {numberWithCommas(coin?.market_data.current_price[currency.toLowerCase()])}
            </Typography>
          </span>
          <span style={{display: 'flex'}}>
            <Typography variant='h5'sx={customStyles.marketDataHead}>
              Market Cap:
            </Typography>
            &nbsp; &nbsp;
            <Typography variant='h5' sx={{fontFamily: "Montserrat"}}>
              {symbol}{" "}
              {numberWithCommas(coin?.market_data.market_cap[currency.toLowerCase()].toString().slice(0, -6))}M
            </Typography>
          </span>
        </div>
      </div>
      {/* chart */}
      <CoinInfo coin = {coin}/>
    </div>
  )
}

export default Coinpage