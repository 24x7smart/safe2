import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { LaunchComponent } from './launch/launch.component';

const routes: Routes = [
  {path: 'login', component: LoginComponent},
  {path: 'launch', component: LaunchComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
