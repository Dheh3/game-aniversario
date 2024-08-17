import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FeedService {

  private _hunger = new BehaviorSubject<number>(10);
  private hungerInterval: any;

  get sharedHunger() {
    return this._hunger.asObservable();
  }

  get currentHunger(): number {
    return this._hunger.value;
  }

  setSharedHunger(value: number) {
    this._hunger.next(value);
  }

  startHungerCountdown() {
    if (this.hungerInterval) {
      return;
    }

    this.hungerInterval = setInterval(() => {
      console.log(this.currentHunger)
      if (this.currentHunger > 0) {
        this.setSharedHunger(this.currentHunger - 2);
      } else {
        clearInterval(this.hungerInterval);
        this.hungerInterval = null;
      }
    }, 5000);
  }

  stopHungerCountdown() {
    if (this.hungerInterval) {
      clearInterval(this.hungerInterval);
      this.hungerInterval = null;
    }
  }

  constructor() {
    this.startHungerCountdown();
  }
}
