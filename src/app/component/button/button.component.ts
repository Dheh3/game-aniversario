import { Component, OnInit } from '@angular/core';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss'],
})
export class ButtonComponent implements OnInit {


  phrases: any[] = [
    "...",
    "hmm...",
    "d-desculpe...",
    "não quero obrigada",
    "não...",
    "zzz...",
    "*Roonc*",
    "n-não estou com fome",
    "onde sera que deixei...",
    "*cof cof*",
    "não preciso, obrigada...",
    "não tem muito espaço aqui...",
    "não estou com fome",
    "19...20...21...",
  ];

  randomPhrase: string = this.phrases[Math.floor(Math.random() * this.phrases.length)];

  constructor(private toastController: ToastController) { }
  ngOnInit() { }

  async getRandom() {
    const randomIndex = Math.floor(Math.random() * this.phrases.length);
    this.randomPhrase = this.phrases[randomIndex];

    setTimeout(async () => {
      const toast = await this.toastController.create({
        message: this.randomPhrase,
        duration: 1500,
        cssClass: "custom",
      });
      await toast.present();
    }, 200);

  }

}
