import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PropListComponent } from './prop-list/prop-list.component';
import { PropApproveComponent } from './prop-approve/prop-approve.component';
import { PropNodeviceComponent } from './prop-nodevice/prop-nodevice.component';
import { PropertiesRoutingModule } from './properties-routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatIconModule } from '@angular/material/icon';
import { MatTabsModule } from '@angular/material/tabs';
import { MatListModule } from '@angular/material/list';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatTableModule } from '@angular/material/table';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LibrariesModule } from 'app/libraries/libraries.module';
import { PropEditComponent } from './prop-edit/prop-edit.component';
import { BlockInfoComponent } from './prop-edit/block-info/block-info.component';
import { MatDialogModule } from '@angular/material/dialog';
import { ApproveStepComponent } from './prop-approve/approve-step/approve-step.component';
import { DeviceEditComponent } from './device-edit/device-edit.component';
import { MatButtonModule } from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';
import { MatSelectModule } from '@angular/material/select';


@NgModule({
  declarations: [
    PropListComponent,
    PropApproveComponent,
    PropNodeviceComponent,
    PropEditComponent,
    BlockInfoComponent,
    ApproveStepComponent,
    DeviceEditComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    MatCardModule,
    MatGridListModule,
    MatIconModule,
    MatTabsModule,
    MatListModule,
    MatFormFieldModule,
    MatInputModule,
    MatTableModule,
    MatDialogModule,
    MatButtonModule,
    MatMenuModule,
    MatSelectModule,
    BrowserAnimationsModule, // Required for Angular Material animations
    LibrariesModule,
    PropertiesRoutingModule
  ]
})
export class PropertiesModule { }
