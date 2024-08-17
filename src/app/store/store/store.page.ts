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
  isDocActive: boolean = true
  isKeyActive: boolean = true

  cssBlaKey = 'blaKey'
  colorKey: string = "dark"

  cssBlaDoc: string = 'bla'
  colorDoc: string = "dark"

  message!: string;

  constructor(private coinService: CoinsService, private toastController: ToastController) { }

  ngOnInit() {
    this.loadPurchaseState()
  }

  //desativar em dev

  loadPurchaseState() {
    const keyPurchased = localStorage.getItem('keyPurchased');
    const docPurchased = localStorage.getItem('docPurchased');

    if (keyPurchased === 'true') {
      this.isKeyActive = false;
      this.colorKey = "tertiary";
      this.cssBlaKey = 'bleKey';
    }

    if (docPurchased === 'true') {
      this.isDocActive = false;
      this.colorDoc = "tertiary";
      this.cssBlaDoc = 'ble';
    }
  }

  async presentToast(message: string) {
    const toast = await this.toastController.create({
      message,
      duration: 2000,
      cssClass: "custom",
    });
    toast.present();
  }

  removeKeys() {
    if (this.coinService.removeKeys(100)) {
      this.presentToast('Você obteve uma chave!');
      this.isKeyActive = false
      this.colorKey = "tertiary"
      this.cssBlaKey = 'bleKey'

      //desativar em dev
      localStorage.setItem('keyPurchased', 'true')
      console.log(this.isKeyActive)
    } else if (this.isKeyActive === false) {
      this.presentToast('Already unlocked');
    }
    else {
      this.lowCoins();
      console.log(this.isKeyActive)
    }
  }

  removeDocs() {
    if (this.coinService.removeDocs(20)) {
      this.presentToast('File unlocked');
      this.isDocActive = false
      this.colorDoc = "tertiary"
      this.cssBlaDoc = 'ble'

      //desativar em dev
      localStorage.setItem('docPurchased', 'true')
      console.log(this.isDocActive)
    } else if (this.isDocActive === false) {
      this.presentToast('Already unlocked');
    }
    else {
      this.lowCoins();
      console.log(this.isDocActive)
    }

  }

  lowCoins() {
    this.presentToast('Moedas insuficientes.');
  }

  errors: string[] = [
    "volition",
    "ID",
    "EGO",
    "13SEL+Ego.mp4",
  ]

  failure() {
    let randErros = this.errors[Math.floor(Math.random() * this.errors.length)]
    this.presentToast("error " + randErros);
    console.log(randErros)
  }

}
