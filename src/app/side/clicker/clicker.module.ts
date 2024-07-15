import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ClickerPageRoutingModule } from './clicker-routing.module';

import { ClickerPage } from './clicker.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ClickerPageRoutingModule
  ],
  declarations: [ClickerPage]
})
export class ClickerPageModule {}
