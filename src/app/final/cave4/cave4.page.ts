import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cave4',
  templateUrl: './cave4.page.html',
  styleUrls: ['./cave4.page.scss'],
})
export class Cave4Page implements OnInit {

  path1: string = '../../../assets/cave/pathHell.png';
 
  route1: string = '/hell';
  
  constructor() { }

  ngOnInit() {
    
  }

}
