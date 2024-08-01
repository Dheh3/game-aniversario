import { Component, OnInit} from '@angular/core';
import { register } from 'swiper/element/bundle';
import { CoinsService } from './service/coins.service';

register();

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  doc!:number;

  constructor(private coinsService: CoinsService) {}

  ngOnInit(){
    this.coinsService.currentDoc.subscribe(doc => this.doc = doc);
  }

}
