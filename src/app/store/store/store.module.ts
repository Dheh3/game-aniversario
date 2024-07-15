import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { StorePageRoutingModule } from './store-routing.module';

import { StorePage } from './store.page';
import { componentModule } from "../../component/component.module";

@NgModule({
    declarations: [StorePage],
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        StorePageRoutingModule,
        componentModule
    ]
})
export class StorePageModule {}
