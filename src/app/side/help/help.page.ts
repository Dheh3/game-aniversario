import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-help',
  templateUrl: './help.page.html',
  styleUrls: ['./help.page.scss'],
})
export class HelpPage implements OnInit {
  
  happy!: string
  unlocked!:string

  today = new Date();
  
  checkDate(){
    
    switch(this.today.getDate() === 22 && this.today.getMonth() === 10|| this.today.getDate() === 31 && this.today.getMonth() === 10){
      case true:

        this.happy = 'Feliz aniversário'
        this.unlocked = 'oh! Já estão todas liberadas? Feliz aniversário! ' 
        break
      case false:

        this.happy = ''
        break

      default:
        console.log("ops...")

    }
  }

  constructor() { }

  ngOnInit() {
    this.checkDate()
  }

}
