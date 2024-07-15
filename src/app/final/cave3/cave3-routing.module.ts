import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Cave3Page } from './cave3.page';

const routes: Routes = [
  {
    path: '',
    component: Cave3Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Cave3PageRoutingModule {}
