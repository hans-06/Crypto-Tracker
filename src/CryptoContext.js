import axios from 'axios';
import { CoinList } from "./config/api";
import React, { createContext, useContext, useState, useEffect } from 'react'

const Crypto = createContext();

const CryptoContext = ({children}) => {
  const [currency, setCurrency] = useState("INR");
  const [symbol, setSymbol] = useState("₹");
  const [coins, setCoins] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchCoins = async () => {
    setLoading(true);
    const { data } = await axios.get(CoinList(currency));
    setCoins(data);
    setLoading(false);
  };
  
  useEffect(() => {
    if(currency === "INR") {
      setSymbol("₹")
    }
    else if(currency === "USD"){
      setSymbol("$")
    }
  
  }, [currency])
  
  return <Crypto.Provider value={{currency,symbol,setCurrency, coins, loading, fetchCoins}}>{children}</Crypto.Provider>
}

export default CryptoContext;

export const CryptoState = () => {
  return useContext(Crypto);
}