import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MonitorComponent } from './monitor/monitor.component';
import { AlertDisplayComponent } from './alert-display/alert-display.component';
import { AlertHistoryComponent } from './alert-history/alert-history.component';

const routes: Routes = [
  {path: 'monitor', component: MonitorComponent},
  {path: 'alert', component: AlertDisplayComponent},
  {path: 'history', component: AlertHistoryComponent},
  {path: '', component: AlertHistoryComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MonitorRoutingModule { }
