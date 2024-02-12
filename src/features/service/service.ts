import axios from "axios"

const Server_Url = "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1&sparkline=false&price_change_percentage=1h%2C24h%2C7d&locale=en"
const SearchCoins_Url = `https://api.coingecko.com/api/v3/search?query=`

const getAllCoins = async ()=>{
    const url = `${Server_Url}`
    return await axios.get(url)
}


const getSearchCoins = async (query:string)=>{
    const url = `${SearchCoins_Url}${query}`
    return await axios.get(url)
}


export {
    getAllCoins,
    getSearchCoins
}