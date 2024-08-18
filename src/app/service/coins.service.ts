import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CoinsService {
  /* private coins = new BehaviorSubject<number>(999);
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

    if (this.key.value >= 1) {
      return false
    }
    else if (currentCoins >= amount) {
      this.coins.next(currentCoins - amount);
      this.key.next(currentKey + 1);
      return true;
    }
    return false;
  }

  removeDocs(amount: number) {
    const currentCoins = this.coins.value;
    const currentDoc = this.doc.value;

    if (this.doc.value >= 1) {
      return false
    }
    else if (currentCoins >= amount) {
      this.coins.next(currentCoins - amount);
      this.doc.next(currentDoc + 1);
      return true;
    }
    return false;
  } */

    private coins = new BehaviorSubject<number>(this.loadFromLocalStorage('coins', 999));
    currentCoins = this.coins.asObservable();
  
    private key = new BehaviorSubject<number>(this.loadFromLocalStorage('key', 0));
    currentKey = this.key.asObservable();
  
    private doc = new BehaviorSubject<number>(this.loadFromLocalStorage('doc', 0));
    currentDoc = this.doc.asObservable();
  
    constructor() { }
  
    addCoins(amount: number) {
      const currentCoins = this.coins.value;
      const newCoinValue = currentCoins + amount;
      this.coins.next(newCoinValue);
      this.saveToLocalStorage('coins', newCoinValue);
    }
  
    removeKeys(amount: number): boolean {
      const currentCoins = this.coins.value;
      const currentKey = this.key.value;
  
      if (currentKey >= 1) {
        return false;
      } else if (currentCoins >= amount) {
        const newCoinValue = currentCoins - amount;
        const newKeyValue = currentKey + 1;
        this.coins.next(newCoinValue);
        this.key.next(newKeyValue);
        this.saveToLocalStorage('coins', newCoinValue);
        this.saveToLocalStorage('key', newKeyValue);
        return true;
      }
      return false;
    }
  
    removeDocs(amount: number): boolean {
      const currentCoins = this.coins.value;
      const currentDoc = this.doc.value;
  
      if (currentDoc >= 1) {
        return false;
      } else if (currentCoins >= amount) {
        const newCoinValue = currentCoins - amount;
        const newDocValue = currentDoc + 1;
        this.coins.next(newCoinValue);
        this.doc.next(newDocValue);
        this.saveToLocalStorage('coins', newCoinValue);
        this.saveToLocalStorage('doc', newDocValue);
        return true;
      }
      return false;
    }
  
    private saveToLocalStorage(key: string, value: number) {
      localStorage.setItem(key, value.toString());
    }
  
    private loadFromLocalStorage(key: string, defaultValue: number): number {
      const storedValue = localStorage.getItem(key);
      return storedValue ? parseInt(storedValue, 10) : defaultValue;
    }

}
