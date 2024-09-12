import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { bEvent } from 'app/models/bevent.model';
import { User } from 'app/models/user.model';
import { EventService } from 'app/services/event.service';
import { UserService } from 'app/services/user.service';

@Component({
  selector: 'app-launch',
  templateUrl: './launch.component.html',
  styleUrls: ['./launch.component.css']
})
export class LaunchComponent implements OnInit {

  stats: any = [
    { "code":"monitor", "title": "Fire Monitoring", "desc": "Monitors the Fire Control Panels in Buildings",
      "stats": [
        {"name": "Unconfirmed", "color": "warning", "count": 3},
        {"name": "Live", "color": "danger", "count": 1 },
        {"name": "Today", "color": "primary", "count": 11},
        {"name": "False", "color": "info", "count": 9}
      ]
    },
    { "code":"response", "title": "Fire Response", "desc": "Handle Fire Calls & Dispatch Appliances",
      "stats": [
        {"name": "Active", "color": "warning", "count": 2},
        {"name": "Major", "color": "danger", "count": 1 },
        {"name": "Today", "color": "primary", "count": 15},
        {"name": "Stansbys", "color": "info", "count": 2}
      ]
    },
    { "code":"noc", "title": "NOC Workbench", "desc": "Review Applications, Inspect Premises and Issue NOCs",
      "stats": [
        {"name": "Open", "color": "warning", "count": 35},
        {"name": "Overdue", "color": "danger", "count": 11 },
        {"name": "New Today", "color": "primary", "count": 5},
        {"name": "Closed Today", "color": "success", "count": 2}
      ]
    },
    { "code":"admin", "title": "Administration", "desc": "Manage USers, Jurisdictions, Settings and more",
      "stats": [
        {"name": "Vehicles", "color": "primary", "count": 58},
        {"name": "Users", "color": "success", "count": 13 },
        {"name": "Surveyors", "color": "info", "count": 11},
        {"name": "Something", "color": "default", "count": 2}
      ]
    }
  ];
  users: User[] = [];

  constructor(private router: Router) { }

  ngOnInit(): void {
    console.log(this.stats.monitor);
  }


  UserName(usr: number) {
    return this.users.find(usr1 => usr1.id === usr).name;
  }

  Goto(loc: string) {
    this.router.navigateByUrl('/' + loc);
  }
}
