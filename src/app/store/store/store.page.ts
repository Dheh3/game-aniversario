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

  //message: string = "Moedas insuficientes!";
  message!: string;
 
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

  removeKeys(){
    if(this.coinService.removeKeys(100)){
      this.presentToast('Você obteve uma chave!');
    }else{
      this.lowCoins();
    }
  }

  removeDocs(){
    if(this.coinService.removeDocs(20)){
      this.presentToast('File unlocked');
    }else{
      this.lowCoins()
      //this.presentToast('Moedas insuficientes.');
    }
  }

  lowCoins(){
    this.presentToast('Moedas insuficientes.');
  }


}
