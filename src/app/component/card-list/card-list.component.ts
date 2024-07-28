import { Component, OnInit } from '@angular/core';
import { documents } from 'src/app/documents';

@Component({
  selector: 'app-card-list',
  templateUrl: './card-list.component.html',
  styleUrls: ['./card-list.component.scss'],
})
export class CardListComponent implements OnInit {

  cards = documents;
  expandedCardId: number | null = null;

  constructor() { }

  ngOnInit() { }

  toggleCard(cardId: number): void {
    if (this.expandedCardId === cardId) {
      this.expandedCardId = null;
    } else {
      this.expandedCardId = cardId;
    }
  }

}
