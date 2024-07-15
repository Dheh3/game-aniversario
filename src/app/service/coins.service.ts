import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CoinsService {
  private coins = new BehaviorSubject<number>(10);
  currentCoins = this.coins.asObservable();

  private key = new BehaviorSubject<number>(0);
  currentKey = this.key.asObservable();

  constructor() { }

  addCoins(amount: number) {
    const currentCoins = this.coins.value;
    this.coins.next(currentCoins + amount);
  }

  removeCoins(amount: number) {
    const currentCoins = this.coins.value;
    const currentKey = this.key.value;
    if (currentCoins >= amount) {
      this.coins.next(currentCoins - amount);
      this.key.next(currentKey + 1);
      return true;
    }
    return false;
  }

}
