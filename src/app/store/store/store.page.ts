import { Component, OnInit } from '@angular/core';
import { CoinsService } from 'src/app/service/coins.service';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-store',
  templateUrl: './store.page.html',
  styleUrls: ['./store.page.scss'],
})
export class StorePage implements OnInit {

  showAlert: boolean = false;
  alertMessage: string = '';

  message: string = "Moedas insuficientes!";
 
  constructor(private coinService: CoinsService, private toastController: ToastController) {

  }

  ngOnInit() { }

  async presentToast(message: string) {
    const toast = await this.toastController.create({
      message,
      duration: 2000,
      cssClass: "custom",
    });
    toast.present();
  }

  removeCoins(){
    if(this.coinService.removeCoins(100)){
      this.presentToast('Você obteve uma chave!');
    }else{
      this.presentToast('Moedas insuficientes.');
    }
  }


}
