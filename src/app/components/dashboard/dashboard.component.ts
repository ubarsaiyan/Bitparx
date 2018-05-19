import {Component, OnInit} from '@angular/core';
import {Coin} from '../classes/coin';
import {MarketDataService} from '../../services/market-data.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  markets;
  coins;
  data;

  selectedCoin: Coin;

  constructor(private dataService: MarketDataService) {
    this.markets = dataService.getMarkets();
    this.coins = dataService.getCoins();
    this.data = dataService.getStocks();
  }


  coinSelect(coin: Coin) {
    this.selectedCoin = coin;
  }

  ngOnInit() {
    this.selectedCoin = this.coins[0];
  }

}
