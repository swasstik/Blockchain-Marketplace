import { NextResponse } from "next/server";

async function fetchCoins(){
    const response = await fetch('https://coinranking1.p.rapidapi.com/coins?referenceCurrencyUuid=yhjMzLPhuIDl&timePeriod=24h&tiers%5B0%5D=1&orderBy=marketCap&orderDirection=desc&limit=50&offset=0', 
    {
        'method': 'GET',
        'headers': {
            'X-RapidAPI-Key': process.env.KEY,
            'X-RapidAPI-Host': process.env.HOST,
        }   
    })
        const coins = await response.json();
        return coins;
}

export async function GET(request){
    const coins = await fetchCoins();
    return NextResponse.json(coins);
}