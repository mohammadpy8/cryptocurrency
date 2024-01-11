const BASE_URL = "https://api.coingecko.com/api/v3";
const API_KEY = "CG-SHxuEmWzYh1h3yaJHE7vvqxF";

const getCoinList = (page: number, currency: string) => {
  return `${BASE_URL}/coins/markets?vs_currency=${currency}&order=market_cap_desc&per_page=20&page=${page}&&x_cg_demo_api_key=${API_KEY}`;
};

const marketChart = (coin: string) => {
  return `${BASE_URL}/coins/${coin}/market_chart?vs_currency=usd&days=7`;
};

export { getCoinList, marketChart };
