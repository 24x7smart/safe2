import { NgModule } from '@angular/core';
import { CommonModule, } from '@angular/common';
import { BrowserModule  } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';

import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';
import { MonitorRoutingModule } from './monitor/monitor-routing.module';

const routes: Routes =[
  {
    path: '',
    redirectTo: 'home/login',
    pathMatch: 'full',
  }, {
    path: '',
    component: AdminLayoutComponent,
    children: [{
      path: '',
      loadChildren: () => import('./layouts/admin-layout/admin-layout.module').then(m => m.AdminLayoutModule)
    }]
  },
  {
      path: 'home',
      loadChildren: () => import('app/home/home.module').then(m => m.HomeModule)
  },
  {
      path: 'source',
      loadChildren: () => import('app/sourcing/sourcing.module').then(m => m.SourcingModule)
  }
];

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    RouterModule.forRoot(routes,{
       useHash: true
    })
  ],
  exports: [
  ],
})
export class AppRoutingModule { }
