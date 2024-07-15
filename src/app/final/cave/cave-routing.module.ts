import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CavePage } from './cave.page';

const routes: Routes = [
  {
    path: '',
    component: CavePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CavePageRoutingModule {}
