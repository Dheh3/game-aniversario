import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Cave2Page } from './cave2.page';

const routes: Routes = [
  {
    path: '',
    component: Cave2Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Cave2PageRoutingModule {}
