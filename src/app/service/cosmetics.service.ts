import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CosmeticsService {

  constructor() { }

  //{id:,name:'',img:''},

  private cosmetics = [
    /* { id: 1, name: 'smile', img: '../../assets/spirtes/smile.png' },
    { id: 2, name: 'talking', img: '../../assets/spirtes/talking.png' }, */
    { id: 1, name: 'Default', img: '../../assets/spirtes/default.png' },
    { id: 2, name: 'Miku', img: '../../assets/spirtes/miku.png' },
    { id: 3, name: 'lain', img: '../../assets/spirtes/lain.png' },
    { id: 4, name: 'Spider', img: '../../assets/spirtes/spider.png' },
    { id: 5, name: 'Venom', img: '../../assets/spirtes/venom.png' },
    { id: 6, name: 'Saiyan', img: '../../assets/spirtes/saiyan.png' },
    { id: 7,name: 'Wired', img: '../../assets/spirtes/wired.png' },
    { id: 8,name: 'id', img: '../../assets/spirtes/id.png' },
  ];

  getCosmetics() {
    return this.cosmetics;
  }

}
