import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { KeyPage } from './key.page';

const routes: Routes = [
  {
    path: '',
    component: KeyPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class KeyPageRoutingModule {}
