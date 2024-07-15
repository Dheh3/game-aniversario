import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FeedService {

  private _hunger = new BehaviorSubject<number>(10);
  
  get sharedHunger(): Observable<number>{
    return this._hunger.asObservable();
  }

  get currentHunger():number{
    return this._hunger.value;
  }

  setSharedHunger(value:number){
    this._hunger.next(value);
  }
  

  constructor() { }
}
