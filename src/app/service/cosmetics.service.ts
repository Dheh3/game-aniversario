import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CosmeticsService {

  constructor() { }

  //{id:,name:'',img:''},

  private cosmetics = [
    { id: 1, name: 'smile', img: '../../assets/spirtes/smile.png' },
    { id: 2, name: 'talking', img: '../../assets/spirtes/talking.png' },
    { id: 3, name: 'Neutral', img: '../../assets/spirtes/Neutral.png' },
    { id: 4, name: 'Miku', img: '../../assets/spirtes/miku.png' },
    { id: 5, name: 'lain', img: '../../assets/spirtes/lain.png' },
    { id: 6, name: '[_objName!]', img: '../../assets/spirtes/glitch.png' },
    { id: 7, name: 'Saiyan', img: '../../assets/spirtes/saiyan.png' },
    { id: 8,name: 'Wired', img: '../../assets/spirtes/cpu.png' },
  ];

  getCosmetics() {
    return this.cosmetics;
  }

}
