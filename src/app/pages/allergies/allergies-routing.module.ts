import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AllergiesPage } from './allergies.page';

const routes: Routes = [
  {
    path: '',
    component: AllergiesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AllergiesPageRoutingModule {}
