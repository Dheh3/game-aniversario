import { Component, OnInit, OnDestroy } from '@angular/core';
import { FeedService } from 'src/app/service/feed.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-food',
  templateUrl: './food.page.html',
  styleUrls: ['./food.page.scss'],
})
export class FoodPage implements OnInit {

  eating: string = '../../../assets/spirtes/eating.png';
  hungerSubscription: Subscription | undefined;
  hungerLevel: number = 10;

  constructor(private feedService: FeedService) { }

  ngOnInit() {
    this.hungerSubscription = this.feedService.sharedHunger.subscribe(level => {
      this.hungerLevel = level;
    });
  }

  ngOnDestroy() {
    if (this.hungerSubscription) {
      this.hungerSubscription.unsubscribe();
    }
  }

  feed() {
    if (this.hungerLevel < 500) {
      this.feedService.setSharedHunger(this.hungerLevel + 10);
    }
  }

}
