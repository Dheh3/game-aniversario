import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CharacterStateService {
  private characterImageSubject = new BehaviorSubject<string>('../../assets/spirtes/default.png');
  characterImage$ = this.characterImageSubject.asObservable();

  setCharacterImage(img: string) {
    this.characterImageSubject.next(img);
  }
  constructor() { }
}
