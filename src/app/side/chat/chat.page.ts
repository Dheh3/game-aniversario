import { Component, OnInit } from '@angular/core';
import { ToastController } from '@ionic/angular';
import { CosmeticsService } from 'src/app/service/cosmetics.service';
import { CharacterStateService } from 'src/app/service/character-state.service';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.page.html',
  styleUrls: ['./chat.page.scss'],
})
export class ChatPage implements OnInit {

  img: string = '../../assets/spirtes/Neutral.png';
  phrases: any[] = [
    "Não gostei...",
    "eh...",
    "Não vejo muito sentido nisso...",
  ];

  randomPhrase: string = this.phrases[Math.floor(Math.random() * this.phrases.length)];
  cosmetics: any[] = [];
  constructor(
    private toastController: ToastController,
    private cosmeticsService: CosmeticsService,
    private characterStateService: CharacterStateService) {
  }

  ngOnInit() {
    this.cosmetics = this.cosmeticsService.getCosmetics();
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

  changeOutfit(img: string) {
    this.characterStateService.setCharacterImage(img);
  }

}
