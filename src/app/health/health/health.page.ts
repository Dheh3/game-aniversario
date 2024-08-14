import { Component, OnInit} from '@angular/core';
import { DialogueService } from 'src/app/service/dialogue.service';
import { DialogueOption } from 'src/app/phrases';

@Component({
  selector: 'app-health',
  templateUrl: './health.page.html',
  styleUrls: ['./health.page.scss'],
})
export class HealthPage implements OnInit {

  randImg:string = '../../../assets/spirtes/wired.png'
  dialogue: any;

  constructor(private dialogueService: DialogueService) { }

  ngOnInit() {
    this.dialogue = this.dialogueService.getDialogue();
    console.log(this.randImg);
  }

  chooseOption(option: DialogueOption) {
    this.dialogueService.chooseOption(option);
    this.dialogue = this.dialogueService.getDialogue();
  }

  resetDialogue() {
    this.dialogueService.reset();
    this.dialogue = this.dialogueService.getDialogue();
  }
}
