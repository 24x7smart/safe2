import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatCardModule } from '@angular/material/card';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatIconModule } from '@angular/material/icon';
import { MatTabsModule } from '@angular/material/tabs';
import { MatListModule } from '@angular/material/list';
import { MatTableModule } from '@angular/material/table';

import { MonitorRoutingModule } from './monitor-routing.module';
import { MonitorComponent } from './monitor/monitor.component';
import { MonitorStatsComponent } from './monitor/monitor-stats/monitor-stats.component';
import { MonitorAlertsComponent } from './monitor/monitor-alerts/monitor-alerts.component';
import { AlertDisplayComponent } from './alert-display/alert-display.component';
import { FloorsComponent } from './alert-display/floors/floors.component';
import { FloorDetailsComponent } from './alert-display/floor-details/floor-details.component';
import { BlockDetailsComponent } from './alert-display/block-details/block-details.component';
import { AlertChatComponent } from './alert-display/alert-chat/alert-chat.component';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { AlertHistoryComponent } from './alert-history/alert-history.component';
import { LibrariesModule } from 'app/libraries/libraries.module';


@NgModule({
  declarations: [
    MonitorComponent,
    MonitorStatsComponent,
    MonitorAlertsComponent,
    AlertDisplayComponent,
    FloorsComponent,
    FloorDetailsComponent,
    BlockDetailsComponent,
    AlertChatComponent,
    AlertHistoryComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    FormsModule,
    MatCardModule,
    MatGridListModule,
    MatIconModule,
    MatTabsModule,
    MatListModule,
    MatFormFieldModule,
    MatInputModule,
    MatTableModule,
    BrowserAnimationsModule, // Required for Angular Material animations
    MonitorRoutingModule,
    LibrariesModule
  ]
})
export class MonitorModule { }
