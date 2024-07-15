import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hell',
  templateUrl: './hell.page.html',
  styleUrls: ['./hell.page.scss'],
})
export class HellPage implements OnInit {
  cake:string = '../../../assets/happy/cake.png'

  constructor() { }

  ngOnInit() {
  }

}
