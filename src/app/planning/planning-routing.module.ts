import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ComponentsComponent } from './scheme/components/components.component';
import { SchemeComponent } from './scheme/scheme/scheme.component';
import { AllocComponent } from './deploy/alloc/alloc.component';
import { PersonnelComponent } from './coord/personnel/personnel.component';
import { SchemeMapComponent } from './scheme/scheme-map/scheme-map.component';
import { ConsoleComponent } from './console/console.component';
import { UnitsComponent } from './coord/units/units.component';
import { PicknChooseComponent } from './deploy/picknchoose/picknchoose.component';

const routes: Routes = [
  {path: 'components', component: ComponentsComponent},
  {path: 'scheme', component: SchemeComponent},
  {path: 'alloc', component: AllocComponent},
  {path: 'personnel', component: PersonnelComponent},
  {path: 'schememap', component: SchemeMapComponent},
  {path: 'console', component: ConsoleComponent},
  {path: 'units', component: UnitsComponent},
  {path: 'picknchoose', component: PicknChooseComponent},
  {path: '', component: ConsoleComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PlanningRoutingModule { }
