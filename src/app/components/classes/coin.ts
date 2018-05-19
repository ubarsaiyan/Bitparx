export class Coin {

  public balance = 55.45;

  constructor(
    public name: string,
    public name_code: string,
    public buy_price: { [market: string]: number},
    public sell_price: { [market: string]: number},
  ) {}

}
