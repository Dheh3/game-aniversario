import { Component, OnInit } from '@angular/core';
import { documents } from "src/app/documents";

@Component({
  selector: 'app-card-list',
  templateUrl: './card-list.component.html',
  styleUrls: ['./card-list.component.scss'],
})
export class CardListComponent implements OnInit {

  cards = documents;
  expandedCardId: number | null = null;
  audio = new Audio()


  constructor() { }

  ngOnInit() { }

  /* toggleCard(cardId: number): void {
    if (this.expandedCardId === cardId) {
      this.expandedCardId = null;
    } else {
      this.expandedCardId = cardId;
    }
  } */


  /* toggleCard(cardId: number): void {
    if (this.expandedCardId === cardId) {
      this.expandedCardId = null;
      this.stopAudio();
    } else {
      this.expandedCardId = cardId;
      const card = this.cards.find(card => card.id === cardId);
      if (card && card.audio) { 
        this.playAudio(card.audio);
      }
    }
  } */

  toggleCard(cardId: number): void {
    if (this.expandedCardId === cardId) {
      this.expandedCardId = null;
      this.stopAudio();
    } else {
      this.expandedCardId = cardId;
      const card = this.cards.find(card => card.id === cardId);
      if (card) {
        const audioPath = card.audio || ''; // Define um valor padrão
        if (audioPath) {
          this.playAudio(audioPath);
        }
      }
    }
  }


  playAudio(audioPath: string): void {
    this.stopAudio();
    this.audio.src = audioPath;
    this.audio.load();
    this.audio.play();
  }

  stopAudio(): void {
    if (this.audio) {
      this.audio.pause();
      this.audio.currentTime = 0;
    }
  }

}
