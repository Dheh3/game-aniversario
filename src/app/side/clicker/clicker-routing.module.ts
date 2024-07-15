import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ClickerPage } from './clicker.page';

const routes: Routes = [
  {
    path: '',
    component: ClickerPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ClickerPageRoutingModule {}
