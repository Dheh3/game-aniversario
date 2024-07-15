import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Cave3PageRoutingModule } from './cave3-routing.module';

import { Cave3Page } from './cave3.page';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Cave3PageRoutingModule
  ],
  declarations: [Cave3Page],
  schemas:[CUSTOM_ELEMENTS_SCHEMA],
})
export class Cave3PageModule {}
