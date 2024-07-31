import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CoinsService {
  private coins = new BehaviorSubject<number>(30);
  currentCoins = this.coins.asObservable();

  private key = new BehaviorSubject<number>(0);
  currentKey = this.key.asObservable();

  private doc = new BehaviorSubject<number>(0);
  currentDoc = this.doc.asObservable();

  constructor() { }

  addCoins(amount: number) {
    const currentCoins = this.coins.value;
    this.coins.next(currentCoins + amount);
  }

  removeKeys(amount: number) {
    const currentCoins = this.coins.value;
    const currentKey = this.key.value;
    if (currentCoins >= amount) {
      this.coins.next(currentCoins - amount);
      this.key.next(currentKey + 1);
      return true;
    }
    return false;
  }

  removeDocs(amount: number) {
    const currentCoins = this.coins.value;
    const currentDoc = this.doc.value;
    if (currentCoins >= amount) {
      this.coins.next(currentCoins - amount);
      this.doc.next(currentDoc + 1);
      return true;
    }
    return false;
  }

}
