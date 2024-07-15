import { Component, OnInit } from '@angular/core'

@Component({
  selector: 'app-clicker',
  templateUrl: './clicker.page.html',
  styleUrls: ['./clicker.page.scss'],
})
export class ClickerPage implements OnInit {

  constructor() { }
  ngOnInit() { }

  closed:string = '../../../assets/door/doorClose.png'
  open:string ='../../../assets/door/doorOpen.png'

  routeClosed: string = '/clicker'
  routeOpen: string = '/cave'

  lockClosed: string = 'lock-closed'
  lockOpen: string = 'lock-open'

  public alertButtons = [
    {
      text: 'OK',
      handler: (data: any) => {
        this.checkPass(data.password)
      }
    }
  ]

  public alertInputs = [
    {
      type: 'password',
      placeholder: '. . .',
      name: 'password'
    },
  ];

  checkPass(password: string) {
    console.log('iniciando')
    if (password === '4-7897-1343-1' || '4789713431' || '4 7897 1343 1' || 'dev') {
      console.log('ok')
      this.closed = this.open
      this.routeClosed = this.routeOpen
      this.lockClosed = this.lockOpen
    } else {
      console.log('não ok...')
    }
  }
}
