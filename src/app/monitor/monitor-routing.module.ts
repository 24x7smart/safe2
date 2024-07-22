import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AttendanceComponent } from './attendance/attendance.component';
import { MonitorComponent } from './monitor/monitor.component';

const routes: Routes = [
  {path: 'attend', component: AttendanceComponent},
  {path: 'monitor', component: MonitorComponent},
  {path: '', component: MonitorComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MonitorRoutingModule { }
