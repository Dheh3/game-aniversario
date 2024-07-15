import { Component, OnInit } from '@angular/core';
import { FeedService } from 'src/app/service/feed.service';

@Component({
  selector: 'app-status',
  templateUrl: './status.component.html',
  styleUrls: ['./status.component.scss'],
})
export class StatusComponent  implements OnInit {

  health:number = 33;
  hunger!:number;
  level:number = 30;
  max500:number = 500;
  cem:number =100;

  constructor(private feedService:FeedService) {
    this.feedService.sharedHunger.subscribe(value => {
      this.hunger = value;
    })
  }

  ngOnInit() {}

  incrementHungerCount(){
    this.feedService.setSharedHunger(this.feedService.currentHunger + 1)
  }

}
