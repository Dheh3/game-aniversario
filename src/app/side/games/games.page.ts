import { Component, OnInit } from '@angular/core';
import { CoinsService } from '../../service/coins.service';
import { PhraseService } from 'src/app/service/phrase.service';
import { ToastController } from '@ionic/angular';


@Component({
  selector: 'app-games',
  templateUrl: './games.page.html',
  styleUrls: ['./games.page.scss'],
})
export class GamesPage implements OnInit {
  playerScore = 0;
  computerScore = 0;
  currentRound = 1;
  message = '';

  showAlert: boolean = false;
  alertMessage: string = '';

  constructor(private coinsService: CoinsService,private phraseService:PhraseService,private toastController:ToastController) {}

  ngOnInit() {}

  playerChoice(playerSelection: string) {
    if (this.currentRound > 3) {
      return;
    }

    const computerSelection = this.computerChoice();
    const result = this.checkWinner(playerSelection, computerSelection);

    if (result === 'win') {
      this.playerScore++;
      this.message = this.phraseService.getPhrase('win', playerSelection, computerSelection);
    } else if (result === 'lose') {
      this.computerScore++;
      this.message = this.phraseService.getPhrase('lose', playerSelection, computerSelection);
    } else {
      this.message = this.phraseService.getPhrase('draw', playerSelection, computerSelection);
    }

    this.currentRound++;

    if (this.currentRound > 3) {
      this.determineWinner();
    }
  }

  computerChoice(): string {
    const choices = ['Pedra', 'Papel', 'Tesoura'];
    const randomIndex = Math.floor(Math.random() * choices.length);
    return choices[randomIndex];
  }

  checkWinner(playerSelection: string, computerSelection: string): string {
    if (playerSelection === computerSelection) {
      return 'draw';
    }

    if (
      (playerSelection === 'Pedra' && computerSelection === 'Tesoura') ||
      (playerSelection === 'Papel' && computerSelection === 'Pedra') ||
      (playerSelection === 'Tesoura' && computerSelection === 'Papel')
    ) {
      return 'win';
    } else {
      return 'lose';
    }
  }

  async presentToast(message: string) {
    const toast = await this.toastController.create({
      message,
      duration: 2000,
      cssClass: "custom",
    });
    toast.present();
  }

  determineWinner() {
    if (this.playerScore > this.computerScore) {
      this.coinsService.addCoins(10);
      this.message = this.phraseService.getEndPhrase('gameEndWin');
      this.presentToast('Você ganhou 10 moedas!')
    } else if (this.playerScore < this.computerScore) {
      this.message = this.phraseService.getEndPhrase('gameEndLose');
      this.presentToast('Você perdeu essa partida')
    } else {
      this.message = this.phraseService.getEndPhrase('gameEndDraw');
      this.presentToast('Terminou em empate')
    }
  }

  resetGame() {
    this.playerScore = 0;
    this.computerScore = 0;
    this.currentRound = 1;
    this.message = '';
  }

}
