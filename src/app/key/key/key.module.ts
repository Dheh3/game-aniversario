import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { KeyPageRoutingModule } from './key-routing.module';

import { KeyPage } from './key.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    KeyPageRoutingModule
  ],
  declarations: [KeyPage]
})
export class KeyPageModule {}
