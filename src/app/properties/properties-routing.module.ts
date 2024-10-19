import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PropListComponent } from './prop-list/prop-list.component';
import { PropApproveComponent } from './prop-approve/prop-approve.component';
import { PropNodeviceComponent } from './prop-nodevice/prop-nodevice.component';
import { PropEditComponent } from './prop-edit/prop-edit.component';
import { DeviceEditComponent } from './device-edit/device-edit.component';

const routes: Routes = [
  {path: 'list', component: PropListComponent},
  {path: 'approvals', component: PropApproveComponent },
  {path: 'nodev', component: PropNodeviceComponent },
  {path: 'edit/:id', component: PropEditComponent },
  {path: 'device/:id', component: DeviceEditComponent },
  {path: '', component: PropListComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PropertiesRoutingModule { }
