import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-monitor-stats',
  templateUrl: './monitor-stats.component.html',
  styleUrls: ['./monitor-stats.component.css']
})
export class MonitorStatsComponent implements OnInit {

  stats = [
    { label: 'Fire Alarms', icon: 'local_fire_department',
      items: [
        { icon: 'notifications_active', value: 2, label: 'Open Alerts' },
        { icon: 'today', value: 11, label: 'Alerts Today' },
        { icon: 'error_outline', value: 7, label: 'False Alerts' },
        { icon: 'check_circle', value: 4, label: 'Closed Alerts' },
      ]
    }];
/*    
    { label: 'Faults', icon: 'engineering',
      items: [
        { icon: 'apartment', value: 101, label: 'Properties' },
        { icon: 'notifications', value: 70, label: 'Detector Faults' },
        { icon: 'fire_hydrant', value: 45, label: 'Water Faults' },
        { icon: 'schedule', value: 15, label: 'Long Overdue' },
          ]
    }
  ];
*/
  constructor() { }

  ngOnInit(): void {
  }

}
