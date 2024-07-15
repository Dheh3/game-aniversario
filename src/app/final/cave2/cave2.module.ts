import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Cave2PageRoutingModule } from './cave2-routing.module';

import { Cave2Page } from './cave2.page';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Cave2PageRoutingModule
  ],
  declarations: [Cave2Page],
  schemas:[CUSTOM_ELEMENTS_SCHEMA],
})
export class Cave2PageModule {}
