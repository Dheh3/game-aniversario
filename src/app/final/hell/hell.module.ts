import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HellPageRoutingModule } from './hell-routing.module';

import { HellPage } from './hell.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HellPageRoutingModule
  ],
  declarations: [HellPage]
})
export class HellPageModule {}
