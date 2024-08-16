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
  //date = this.today.getDate() + '/' + (this.today.getMonth() + 1)

  checkDate(){
    
    switch(this.today.getDate() === 22 && this.today.getMonth() === 10|| this.today.getDate() === 31 && this.today.getMonth() === 10){
      case true:
        console.log("working")
        this.happy = 'Feliz aniversário'
        this.unlocked = 'oh! Já estão todas liberadas? Feliz aniversário! ' 
        break
      case false:
        console.log("Not working")
        this.happy = ''
        break

      default:
        console.log("ehh...")

    }
  }

  constructor() { }

  ngOnInit() {
    this.checkDate()
    //console.log(this.date);
  }

}
