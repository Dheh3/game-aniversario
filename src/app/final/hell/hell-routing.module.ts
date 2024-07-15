import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HellPage } from './hell.page';

const routes: Routes = [
  {
    path: '',
    component: HellPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HellPageRoutingModule {}
