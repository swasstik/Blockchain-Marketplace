"use client"

import {useState} from "react"
import { useRouter } from "next/navigation"

export default function SearchCoins({getSearchResults}) {
    const router = useRouter();
  
  const [query, setQuery] = useState('')
  const handleSubmit = async (value) =>{
   const response = await fetch(`/api/coins/search?query=${value}`)  
   const coin = await response.json()
   getSearchResults(coin)
   
}

const handleChange = (value) => {
    setQuery(value);
    handleSubmit(value);
    router.push(`?query=${value}`)
}
    return (
    <div className="text-center my-20">
        <form onSubmit={handleSubmit}>
          <input className="text-black border-2 border-black rounded-full px-3 py-2" type="text" placeholder="Search coin..." value={query} onChange={(e)=>handleChange(e.target.value)}/>
          <button className="bg-black text-white rounded-full px-3 py-2 hover:bg-black/60" type="submit">Search</button> 
        </form>
    </div>
  )
}

