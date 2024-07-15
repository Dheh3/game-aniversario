import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CavePageRoutingModule } from './cave-routing.module';

import { CavePage } from './cave.page';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CavePageRoutingModule
  ],
  declarations: [CavePage],
  schemas:[CUSTOM_ELEMENTS_SCHEMA],
})
export class CavePageModule {}
