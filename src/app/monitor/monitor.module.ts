import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MonitorRoutingModule } from './monitor-routing.module';
import { MonitorComponent } from './monitor/monitor.component';
import { AttendanceComponent } from './attendance/attendance.component';


@NgModule({
  declarations: [
    MonitorComponent,
    AttendanceComponent
  ],
  imports: [
    CommonModule,
    MonitorRoutingModule
  ]
})
export class MonitorModule { }
