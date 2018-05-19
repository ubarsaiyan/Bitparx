import {Injectable} from '@angular/core';
import {coins, markets} from '../config/marketData';
import {data} from '../config/mock_chart_data';

@Injectable({
  providedIn: 'root'
})
export class MarketDataService {

  constructor() {
  }

  getMarkets() {
    return markets;
  }

  getCoins() {
    return coins;
  }

  getStocks() {
    return data;
  }
}
