import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PlanningRoutingModule } from './planning-routing.module';
import { ConsoleComponent } from './console/console.component';
import { SchemeComponent } from './scheme/scheme/scheme.component';
import { ComponentsComponent } from './scheme/components/components.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AllocComponent } from './deploy/alloc/alloc.component';
import { SectorAllocComponent } from './deploy/sector-alloc/sector-alloc.component';
import { PersonnelComponent } from './coord/personnel/personnel.component';

import {MatButtonModule} from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';
import {MatRippleModule} from '@angular/material/core';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatTooltipModule} from '@angular/material/tooltip';
import {MatSelectModule} from '@angular/material/select';
import {MatIconModule } from '@angular/material/icon';
import {MatSliderModule } from '@angular/material/slider';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import {MatMenuModule} from '@angular/material/menu';
import { MatDialogModule } from '@angular/material/dialog';
import { MatListModule } from '@angular/material/list';
import { MatCardModule } from '@angular/material/card';

import {CdkAccordionModule} from '@angular/cdk/accordion';

import { UnitsSummaryComponent } from './coord/units-summary/units-summary.component';
import { ImportpersComponent } from './coord/importpers/importpers.component';
import { SchemeMapComponent } from './scheme/scheme-map/scheme-map.component';
import { MapAddiconsComponent } from './scheme/scheme-map/map-addicons/map-addicons.component';
import { SecTypeService } from 'app/services/sec-type.service';
import { MapSeciwComponent } from './scheme/scheme-map/map-seciw/map-seciw.component';
import { InfoWindowService } from 'app/services/info-window.service';
import { MapSectorsComponent } from './scheme/scheme-map/map-sectors/map-sectors.component';
import { UnitsComponent } from './coord/units/units.component';
import { OptionsComponent } from './console/options/options.component';
import { MapToolbarComponent } from './scheme/scheme-map/map-toolbar/map-toolbar.component';
import { SectorEditComponent } from './scheme/scheme-map/sector-edit/sector-edit.component';
import { PicknChooseComponent } from './deploy/picknchoose/picknchoose.component';
import { SearchPersComponent } from './deploy/picknchoose/search-pers/search-pers.component';
import { EditPersonComponent } from './coord/personnel/edit-person/edit-person.component';


@NgModule({
  declarations: [
    ConsoleComponent,
    SchemeComponent,
    ComponentsComponent,
    AllocComponent,
    SectorAllocComponent,
    PersonnelComponent,
    UnitsSummaryComponent,
    ImportpersComponent,
    SchemeMapComponent,
    MapAddiconsComponent,
    MapSeciwComponent,
    MapSectorsComponent,
    UnitsComponent,
    OptionsComponent,
    MapToolbarComponent,
    SectorEditComponent,
    PicknChooseComponent,
    SearchPersComponent,
    EditPersonComponent
  ],
  imports: [
    CommonModule,
    PlanningRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatRippleModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatTooltipModule,
    MatIconModule,
    MatSliderModule,
    MatMenuModule,
    MatSlideToggleModule,
    MatDialogModule,
    MatListModule,
    MatCardModule,
    CdkAccordionModule
  ],
  providers: [SecTypeService, InfoWindowService]
})
export class PlanningModule { }
