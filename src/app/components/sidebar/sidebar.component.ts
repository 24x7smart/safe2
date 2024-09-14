import { Component, OnInit } from '@angular/core';
import { SidenavService } from 'app/services/sidenav.service';

declare const $: any;
declare interface RouteInfo {
    path: string;
    title: string;
    icon: string;
    class: string;
    children: RouteInfo[];
}

export const ROUTES: RouteInfo[] = [
  { path: '/monitor', title: 'Alarms',  icon:'local_fire_department', class: '',
    children: [
      {path: 'monitor/dashboard', title: 'Dashboard',  icon: 'dashboard', class: '', children: []},
      {path: 'monitor/monitor', title: 'Monitor',  icon: 'notifications_active', class: '', children: []},
      {path: 'monitor/history', title: 'Alarm History',  icon: 'list', class: '', children: []},
    ]
  },
  { path: '/faults', title: 'Faults',  icon:'handyman', class: '',
    children: [
      {path: '/faults/dashboard', title: 'Dashboard',  icon: 'dashboard', class: '', children: []},
      {path: '/faults/renewals', title: 'NOC Renewals',  icon: 'autorenew', class: '', children: []},
      {path: '/faults/history', title: 'History',  icon: 'list', class: '', children: []},
    ]
  },
  { path: '/properties', title: 'Properties',  icon:'place', class: '',
    children: [
      {path: '/deploy/console', title: 'Dashboard',  icon: 'dashboard', class: '', children: []},
      {path: 'properties/list', title: 'Properties',  icon: 'list', class: '', children: []},
      {path: 'properties/approvals', title: 'Approvals',  icon: 'fact_check', class: '', children: []},
      {path: 'properties/oos', title: 'No Device Properties',  icon: 'playlist_remove', class: '', children: []},
    ]
  },
  { path: '/reports', title: 'Reports',  icon:'list_alt', class: '',
    children: [
      {path: '/reports/alarmrep', title: 'Alarm Report',  icon: 'notifications_active', class: '', children: []},
      {path: '/reports/faultrep', title: 'Faults Report',  icon: 'handyman', class: '', children: []},
      {path: '/reports/compscore', title: 'Compliance Score',  icon: 'verified', class: '', children: []},
      {path: '/reports/renewrep', title: 'Pending Renewal Report',  icon: 'sync_problem', class: '', children: []},
      {path: '/reports/proprep', title: 'Properties Report',  icon: 'place', class: '', children: []},
      {path: '/reports/propdrep', title: 'Property Summary',  icon: 'where_to_vote', class: '', children: []}
    ]
  },
  { path: '/admin', title: 'Administration',  icon:'person', class: '',
    children: [
      {path: '/admin/users', title: 'Users',  icon: 'group', class: '', children: []},
      {path: '/admin/settings', title: 'Settings',  icon: 'settings', class: '', children: []}
    ]
  }
];

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  menuItems: any[];
  sidenavService: SidenavService;

  constructor() { }

  ngOnInit() {
    this.menuItems = ROUTES.filter(menuItem => menuItem);
  }
  isMobileMenu() {
      if ($(window).width() > 991) {
          return false;
      }
      return true;
  };
}
