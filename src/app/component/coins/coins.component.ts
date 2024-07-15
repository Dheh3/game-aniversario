import { Component, OnInit } from '@angular/core';
import { CoinsService } from 'src/app/service/coins.service';

@Component({
  selector: 'app-coins',
  templateUrl: './coins.component.html',
  styleUrls: ['./coins.component.scss'],
})
export class CoinsComponent implements OnInit {

  coins!: number;
  key!:number;

  constructor(private coinsService: CoinsService) {}

  ngOnInit() {
    this.coinsService.currentCoins.subscribe(coins => this.coins = coins);
    this.coinsService.currentKey.subscribe(key => this.key = key);
  }

}
