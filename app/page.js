'use client'

import {useState, useEffect} from "react"
import Coins from "./components/Coins";
import SearchCoins from "./components/Searchcoins";
import { useSearchParams } from "next/navigation"

export default function Home() {
  const searchParams = useSearchParams();
  const val = searchParams.get("query");
  
  const [coins,setCoins] = useState([]);
if(!val){
  useEffect(()=>{
    const getCoins = async () =>{
      const response = await fetch('api/coins');
      const coins = await response.json();
      setCoins(coins.data.coins);
    }
    getCoins();
  },[]);
}else{
  
  useEffect(()=>{
    console.log(val);
    const getCoins = async (val) =>{
      const response = await fetch(`/api/coins/search?query=${val}`);
      const coins = await response.json();
      setCoins(coins);
      // getSearchResults(coins);
    }
    getCoins(val);
  },[])
}
 
  return (
   <div className="text-center">
    <h1 className="font-bold text-6xl mt-14">Crypto Coins</h1>
    <SearchCoins getSearchResults={(results) =>setCoins(results)}/>
    <Coins coins={coins} />
    </div>
  )
}
