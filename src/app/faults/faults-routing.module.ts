import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ActiveListComponent } from './active-list/active-list.component';

const routes: Routes = [
    {path: 'active', component: ActiveListComponent},
  ];
  
  @NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
  })
  export class FaultsRoutingModule { }