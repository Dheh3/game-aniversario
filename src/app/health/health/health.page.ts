import { Component, OnInit } from '@angular/core';
import { DialogueService } from 'src/app/service/dialogue.service';
import { DialogueOption } from 'src/app/phrases';

@Component({
  selector: 'app-health',
  templateUrl: './health.page.html',
  styleUrls: ['./health.page.scss'],
})
export class HealthPage implements OnInit {

  jump = '../../../assets/photos/jumpScare.png';

  ranImg:any[] =[
    '../../../assets/spirtes/cpu.png',
    '../../../assets/spirtes/creepy.png',
    /* '../../../assets/spirtes/talking.png', */
  ];
  randImg:string = this.ranImg[Math.floor(Math.random()*this.ranImg.length)];


  dialogue: any;
  showJumpscare = false;
  isCreepy: boolean = false;

  constructor(private dialogueService: DialogueService) { }

  ngOnInit() {
    this.dialogue = this.dialogueService.getDialogue();
    console.log(this.randImg);
    this.randImg=this.getRandomImg();
  }

  getRandomImg(){
    const randomValue = Math.random();

    if (randomValue < 0.1) {//antes: 0.01
      this.isCreepy = true;
      return '../../../assets/spirtes/creepy.png';
    }
    this.isCreepy =false;
    const otherImages = this.ranImg.filter(img => img !== '../../../assets/spirtes/creepy.png');
    return otherImages[Math.floor(Math.random() * otherImages.length)];
  
  }

  chooseOption(option: DialogueOption) {
    const jumpscare = this.dialogueService.chooseOption(option);
    this.dialogue = this.dialogueService.getDialogue();

    if (jumpscare) {
      this.showJumpscare = true;
      setTimeout(() => this.showJumpscare = false, 900); // antes 3000

      this.dialogueService.chooseOption(option);
      this.dialogue = this.dialogueService.getDialogue();
    }
  }

  resetDialogue() {
    this.dialogueService.reset();
    this.dialogue = this.dialogueService.getDialogue();
  }
}
