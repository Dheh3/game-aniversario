import { Component, OnInit } from '@angular/core';
import { ToastController } from '@ionic/angular';
import { CharacterStateService } from '../service/character-state.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  img:string = '../../assets/spirtes/Neutral.png';

  phrases: any[] = [
    "...",
    "hmm...",
    "zzz...",
    "*Roonc*",
    "onde sera que deixei...",
    "*cof cof*",
    "19...20...21...",
    "...o-ouviu isso?",
  ];

  randomPhrase: string = this.phrases[Math.floor(Math.random() * this.phrases.length)];

  constructor(private toastController: ToastController, private characterStateService: CharacterStateService) { }
  ngOnInit() {
    this.characterStateService.characterImage$.subscribe(img => {
      this.img = img;
    });
  }

  async getRandom() {
    const randomIndex = Math.floor(Math.random() * this.phrases.length);
    this.randomPhrase = this.phrases[randomIndex];

    setTimeout(async () => {
      const toast = await this.toastController.create({
        message: this.randomPhrase,
        duration: 2000,
        cssClass: "custom",
        position: 'middle'
      });
      await toast.present();
    }, 200);

  }


}
