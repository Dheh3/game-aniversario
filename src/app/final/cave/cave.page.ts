import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cave',
  templateUrl: './cave.page.html',
  styleUrls: ['./cave.page.scss'],
})
export class CavePage implements OnInit {

  path1!: string;
  path2!: string;
  path3!: string;
  route1!: string;
  route2!: string;
  route3!: string;

  randPaths:string[] =[
   '../../../assets/cave/door1.png',
    '../../../assets/cave/door3.png',
    '../../../assets/cave/door2.png',
    '../../../assets/cave/door4.png',
    '../../../assets/cave/door5.png',
    '../../../assets/cave/door6.png',
    '../../../assets/cave/door7.png',
    '../../../assets/cave/door8.png',
    '../../../assets/cave/door9.png',
    '../../../assets/cave/door10.png',

  ]
  randRoutes: string[] = ['/cave2', '/cave3','/cave2'];
  
  constructor() { }

  ngOnInit() {
    this.randomizePathsAndRoutes();
  }

  randomizePathsAndRoutes() {
    const shuffledPaths = this.shuffleArray(this.randPaths);
    const shuffledRoutes = this.shuffleArray(this.randRoutes);
    
    this.path1 = shuffledPaths[0];
    this.path2 = shuffledPaths[1];
    this.path3 = shuffledPaths[2];

    this.route1 = shuffledRoutes[0];
    this.route2 = shuffledRoutes[1];
    this.route3 = shuffledRoutes[2];
  }

  shuffleArray(array: string[]): string[] {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  }

}
