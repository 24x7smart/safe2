import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SourcingRoutingModule } from './sourcing-routing.module';
import { UnitSourcingComponent } from './unit-sourcing/unit-sourcing.component';


@NgModule({
  declarations: [
    UnitSourcingComponent
  ],
  imports: [
    CommonModule,
    SourcingRoutingModule
  ]
})
export class SourcingModule { }
