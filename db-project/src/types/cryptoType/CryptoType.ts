interface crypto {
  total_volume: number;
  total_supply: number;
  price_change_percentage_24h: number;
  price_change_24h: number;
  max_supply: number | null;
  market_cap_rank: number;
  market_cap_change_percentage_24h: number;
  market_cap_change_24h: number;
  market_cap: number;
  low_24h: number;
  high_24h: number;
  fully_diluted_valuation: number;
  current_price: number;
  circulating_supply: number;
  atl_change_percentage: number;
  atl: number;
  ath_change_percentage: number;
  ath: number;
  symbol: string;
  name: string;
  last_updated: string;
  image: string;
  id: string;
  atl_date: string;
  ath_date: string;
  roi: null | {
    time: number;
    currency: string;
    percentage: number;
  };
}

export default crypto;
