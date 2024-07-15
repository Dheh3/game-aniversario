import { Injectable } from '@angular/core';
import { phrases } from '../phrases';

@Injectable({
  providedIn: 'root',
})
export class PhraseService {
  private phrases = phrases;

  constructor() {}

  getPhrase(type: 'win' | 'lose' | 'draw', playerChoice: string, computerChoice: string): string {
    const phraseList = this.phrases[type];
    const randomIndex = Math.floor(Math.random() * phraseList.length);
    let phrase = phraseList[randomIndex];
    phrase = phrase.replace('{playerChoice}', playerChoice).replace('{computerChoice}', computerChoice);
    return phrase;
  }

  getEndPhrase(type: 'gameEndWin' | 'gameEndLose' | 'gameEndDraw'): string {
    return this.phrases[type];
  }
}
