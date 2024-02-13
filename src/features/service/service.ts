import axios from "axios";

const Server_Url =
  "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=250&page=1&sparkline=false&locale=en";

export const getAllCoins = () => {
  return axios.get(Server_Url);
};
