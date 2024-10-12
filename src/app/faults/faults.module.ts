import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActiveListComponent } from './active-list/active-list.component';
import { LibrariesModule } from 'app/libraries/libraries.module';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatTabsModule } from '@angular/material/tabs';
import { MatListModule } from '@angular/material/list';
import { FaultsRoutingModule } from './faults-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatTableModule } from '@angular/material/table';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';


@NgModule({
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
    FaultsRoutingModule,
    LibrariesModule
  ],
  declarations: [
    ActiveListComponent
  ]
})
export class FaultsModule { }
