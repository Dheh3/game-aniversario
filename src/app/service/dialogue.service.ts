import { Injectable } from '@angular/core';
import { phrases2, DialogueOption } from '../phrases';

type DialogueKey = keyof typeof phrases2;

@Injectable({
  providedIn: 'root'
})
export class DialogueService {

  private currentDialogue = phrases2.start;

  constructor() {}

  getDialogue() {
    return this.currentDialogue;
  }

  chooseOption(option: DialogueOption) {
    this.currentDialogue = phrases2[option.next as DialogueKey];
    return option.jumpscare || false;
  }

  reset() {
    this.currentDialogue = phrases2.start;
  }
}
