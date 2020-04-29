import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LenguagePage } from './lenguage.page';

const routes: Routes = [
  {
    path: '',
    component: LenguagePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LenguagePageRoutingModule {}
