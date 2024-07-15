import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Cave4PageRoutingModule } from './cave4-routing.module';

import { Cave4Page } from './cave4.page';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Cave4PageRoutingModule
  ],
  declarations: [Cave4Page],
  schemas:[CUSTOM_ELEMENTS_SCHEMA],
})
export class Cave4PageModule {}
