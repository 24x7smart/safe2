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
  { path: '/dashboard', title: 'Console',  icon: 'dashboard', class: '',
    children: [
      {path: '/deploy/console', title: 'Dashboard',  icon: 'dashboard', class: '', children: []},
      {path: '/dashboard/messages', title: 'Send Messages',  icon: 'dashboard', class: '', children: []},
      {path: '/dashboard/tickets', title: 'Duty Tickets',  icon: 'dashboard', class: '', children: []},
      {path: '/dashboard/rolls', title: 'Nominal Rolls',  icon: 'dashboard', class: '', children: []}
    ]
  },
  { path: '/user-profile', title: 'Scheme',  icon:'person', class: '',
    children: [
      {path: '/deploy/components', title: 'Components',  icon: 'line_weight', class: '', children: []},
      {path: '/deploy/scheme', title: 'Scheme',  icon: 'list', class: '', children: []},
      {path: '/deploy/schememap', title: 'Map',  icon: 'map', class: '', children: []},
      {path: '/cameras', title: 'Cameras',  icon: 'photo_camnera', class: '', children: []}
    ]
  },
  { path: '/table-list1', title: 'Coordination',  icon:'content_paste', class: '',
    children: [
      {path: '/deploy/units', title: 'Units',  icon: 'domain', class: '', children: []},
      {path: '/deploy/personnel', title: 'Personnel',  icon: 'group', class: '', children: []},
      {path: '/importpers', title: 'Import',  icon: 'group_add', class: '', children: []},
      {path: '/assign', title: 'Assign',  icon: 'group_add', class: '', children: []}
    ]
  },
  { path: '/maps', title: 'Deployment',  icon:'place', class: '',
    children: [
      {path: 'deploy/alloc', title: 'Allocate',  icon: 'person_pin', class: '', children: []}
    ]
  },
  { path: '/icons', title: 'Reports',  icon:'bubble_chart', class: '',
    children: [
      {path: '/depreports', title: 'Deployment Reports',  icon: 'person_pin', class: '', children: []},
      {path: '/persreports', title: 'Personnel Reports',  icon: 'group', class: '', children: []},
      {path: '/unitreports', title: 'Unit Reports',  icon: 'domain', class: '', children: []},
      {path: '/elecreports', title: 'Election Reports',  icon: 'how_to_vote', class: '', children: []}
    ]
  },
  { path: '/notifications', title: 'Administration',  icon:'notifications', class: '',
    children: [
      {path: '/admin/event', title: 'Event',  icon: 'dashboard', class: '', children: []},
      {path: '/settings', title: 'Settings',  icon: 'settings', class: '', children: []}
    ]
  },
  // { path: '/upgrade', title: 'Upgrade to PRO',  icon:'unarchive', class: 'active-pro' },
];

// export const ROUTES: RouteInfo[] = [
//     { path: '/dashboard', title: 'Dashboard',  icon: 'dashboard', class: '' },
//     { path: '/user-profile', title: 'User Profile',  icon:'person', class: '' },
//     { path: '/table-list', title: 'Table List',  icon:'content_paste', class: '' },
//     { path: '/typography', title: 'Typography',  icon:'library_books', class: '' },
//     { path: '/icons', title: 'Icons',  icon:'bubble_chart', class: '' },
//     { path: '/maps', title: 'Maps',  icon:'location_on', class: '' },
//     { path: '/notifications', title: 'Notifications',  icon:'notifications', class: '' },
//     { path: '/upgrade', title: 'Upgrade to PRO',  icon:'unarchive', class: 'active-pro' },
// ];

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
