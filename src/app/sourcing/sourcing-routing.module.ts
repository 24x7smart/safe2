import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UnitSourcingComponent } from './unit-sourcing/unit-sourcing.component';

const routes: Routes = [
  {path: 'unit', component: UnitSourcingComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SourcingRoutingModule { }
