import { Component, OnInit } from '@angular/core';
import { ToastController } from '@ionic/angular';
import { CharacterStateService } from '../service/character-state.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  img: string = '../../assets/spirtes/Neutral.png';
  talking: string = '../../assets/spirtes/talking.png'

  phrases: any[] = [
    "...",
    "hmm?",
    "zzz...",
    "Oi",
    "onde sera que deixei...",
    "*cof cof*",
    "19...20...21...",
    "Não me trate como uma maquina.",
  ];

  randomPhrase: string = this.phrases[Math.floor(Math.random() * this.phrases.length)];

  constructor(private toastController: ToastController, private characterStateService: CharacterStateService) { }
  ngOnInit() {
    this.characterStateService.characterImage$.subscribe(img => {
      this.img = img;
    });
  }

  async talk() {

    let isTalking = true;
    const intervalId = setInterval(() => {
      if (isTalking) {
        this.img = '../../assets/spirtes/talking.png';
      } else {
        this.img = '../../assets/spirtes/Neutral.png';
      }
      isTalking = !isTalking; 
    }, 250); 
  
    setTimeout(() => {
      clearInterval(intervalId);
      this.img = '../../assets/spirtes/Neutral.png'; 
    }, 2000);

  }

  async getRandom() {
    this.talk()
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
