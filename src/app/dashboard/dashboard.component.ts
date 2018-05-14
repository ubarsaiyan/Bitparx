import { Component, OnInit } from '@angular/core';
import { Coin } from '../classes/coin';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor() { }

  markets = [
    'BTC',
    'ETH',
  ];

  coins = [
    new Coin ('Bitcoin', 'BTC', {['BTC']: 111.22, ['ETH']: 222.11}, {['BTC']: 333.22, ['ETH']: 222.33}),
    new Coin ('Ethereum', 'ETH', {['BTC']: 11.22, ['ETH']: 22.11}, {['BTC']: 33.22, ['ETH']: 22.33}),
    new Coin ('Ripple', 'XRP', {['BTC']: 1.22, ['ETH']: 2.11}, {['BTC']: 3.22, ['ETH']: 2.33}),
    new Coin ('Bitcoin', 'BTC', {['BTC']: 111.22, ['ETH']: 222.11}, {['BTC']: 333.22, ['ETH']: 222.33}),
    new Coin ('Ethereum', 'ETH', {['BTC']: 11.22, ['ETH']: 22.11}, {['BTC']: 33.22, ['ETH']: 22.33}),
    new Coin ('Ripple', 'XRP', {['BTC']: 1.22, ['ETH']: 2.11}, {['BTC']: 3.22, ['ETH']: 2.33}),
    new Coin ('Bitcoin', 'BTC', {['BTC']: 111.22, ['ETH']: 222.11}, {['BTC']: 333.22, ['ETH']: 222.33}),
    new Coin ('Ethereum', 'ETH', {['BTC']: 11.22, ['ETH']: 22.11}, {['BTC']: 33.22, ['ETH']: 22.33}),
    new Coin ('Ripple', 'XRP', {['BTC']: 1.22, ['ETH']: 2.11}, {['BTC']: 3.22, ['ETH']: 2.33}),
    new Coin ('Bitcoin', 'BTC', {['BTC']: 111.22, ['ETH']: 222.11}, {['BTC']: 333.22, ['ETH']: 222.33}),
    new Coin ('Ethereum', 'ETH', {['BTC']: 11.22, ['ETH']: 22.11}, {['BTC']: 33.22, ['ETH']: 22.33}),
    new Coin ('Ripple', 'XRP', {['BTC']: 1.22, ['ETH']: 2.11}, {['BTC']: 3.22, ['ETH']: 2.33}),
    new Coin ('Bitcoin', 'BTC', {['BTC']: 111.22, ['ETH']: 222.11}, {['BTC']: 333.22, ['ETH']: 222.33}),
    new Coin ('Ethereum', 'ETH', {['BTC']: 11.22, ['ETH']: 22.11}, {['BTC']: 33.22, ['ETH']: 22.33}),
    new Coin ('Ripple', 'XRP', {['BTC']: 1.22, ['ETH']: 2.11}, {['BTC']: 3.22, ['ETH']: 2.33}),
    new Coin ('Bitcoin', 'BTC', {['BTC']: 111.22, ['ETH']: 222.11}, {['BTC']: 333.22, ['ETH']: 222.33}),
    new Coin ('Ethereum', 'ETH', {['BTC']: 11.22, ['ETH']: 22.11}, {['BTC']: 33.22, ['ETH']: 22.33}),
    new Coin ('Ripple', 'XRP', {['BTC']: 1.22, ['ETH']: 2.11}, {['BTC']: 3.22, ['ETH']: 2.33}),
  ];

  selectedCoin: Coin;

  coinSelect(coin: Coin) {
    this.selectedCoin = coin;
  }

  ngOnInit() {
    this.selectedCoin = this.coins[0];
  }

}
