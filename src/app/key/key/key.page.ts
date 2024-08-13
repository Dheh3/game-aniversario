import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-key',
  templateUrl: './key.page.html',
  styleUrls: ['./key.page.scss'],
})
export class KeyPage implements OnInit {

  glitch:string[]=[
    "[_className=!]",
    ".... . .-.. .-.. ---",
    "console",
    "memex",
    "RUdP",
    "!!!!!",
    "arr[]",
    "string",
    "int",
    "boolean",
    "char",
  ];

  randomGlitch: string = this.glitch[Math.floor(Math.random()*this.glitch.length)];
  intervalId: any;

  constructor() { }

  ngOnInit() {
    this.intervalId = setInterval(() => {
      this.randomGlitch = this.glitch[Math.floor(Math.random() * this.glitch.length)];
    }, 100); 
  }

  ngOnDestroy() {
    if (this.intervalId) {
      clearInterval(this.intervalId);
    }
  }

}
