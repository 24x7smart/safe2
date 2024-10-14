import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchListComponent } from './search-list/search-list.component';
import { MatCardModule } from '@angular/material/card';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatIconModule } from '@angular/material/icon';
import { MatTabsModule } from '@angular/material/tabs';
import { MatListModule } from '@angular/material/list';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatTableModule } from '@angular/material/table';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatSelectModule } from '@angular/material/select';
import { MatNativeDateModule } from '@angular/material/core';
import { MatButtonModule } from '@angular/material/button';
import { MatSortModule } from '@angular/material/sort';
import { MatRadioModule } from '@angular/material/radio';
import { MatCheckboxModule } from '@angular/material/checkbox';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SummaryCardsComponent } from './summary-cards/summary-cards.component';
import { SafeGoogleMapComponent } from './safe-google-map/safe-google-map.component';
import { ProcessStepComponent } from './process-step/process-step.component';



@NgModule({
  declarations: [
    SearchListComponent,
    SummaryCardsComponent,
    SafeGoogleMapComponent,
    ProcessStepComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    FormsModule,
    MatSelectModule,
    MatNativeDateModule,
    MatButtonModule,
    MatSortModule,
    MatCardModule,
    MatGridListModule,
    MatIconModule,
    MatTabsModule,
    MatListModule,
    MatFormFieldModule,
    MatInputModule,
    MatTableModule,
    MatDatepickerModule,
    MatCheckboxModule,
    MatRadioModule,
    BrowserAnimationsModule, // Required for Angular Material animations
  ],
  exports: [
    SearchListComponent,
    SummaryCardsComponent,
    SafeGoogleMapComponent,
    ProcessStepComponent
  ]
})
export class LibrariesModule { }
