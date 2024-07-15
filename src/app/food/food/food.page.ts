import { Component, OnInit, OnDestroy } from '@angular/core';
import { FeedService } from 'src/app/service/feed.service';

@Component({
  selector: 'app-food',
  templateUrl: './food.page.html',
  styleUrls: ['./food.page.scss'],
})
export class FoodPage implements OnInit {

  eating: string = '../../../assets/spirtes/eating.png';
  private feedInterval: any;
  private hungerInterval: any;

  constructor(private feedService: FeedService) { }

  ngOnInit() {
    this.startHunger()
  }
  ngOnDestroy() {

  }

  feed() {
    if (this.feedService.currentHunger < 500) {
      this.feedService.setSharedHunger(this.feedService.currentHunger + 10);
    } else {
      this.feedService.setSharedHunger(this.feedService.currentHunger + 0);
      console.log('limite')
    }

  }

  startHunger() {

    this.hungerInterval = setInterval(() => {

      if (this.feedService.currentHunger > 0) {
        this.feedService.setSharedHunger(this.feedService.currentHunger - 1);
        console.log(this.feedService.currentHunger)
      } else {
        clearInterval(this.hungerInterval);
        console.log(this.feedService.currentHunger)
      }
    }, 10000);
  }

  clearInterval() {
    if (this, this.hungerInterval) {
      clearInterval(this.hungerInterval)
    }
  }

}
