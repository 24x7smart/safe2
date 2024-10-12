import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PropListComponent } from './prop-list/prop-list.component';

const routes: Routes = [
  {path: 'list', component: PropListComponent},
  {path: '', component: PropListComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PropertiesRoutingModule { }
