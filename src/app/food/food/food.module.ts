import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FoodPageRoutingModule } from './food-routing.module';

import { FoodPage } from './food.page';
import { componentModule } from "../../component/component.module";

@NgModule({
    declarations: [FoodPage],
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        FoodPageRoutingModule,
        componentModule
    ]
})
export class FoodPageModule {}
