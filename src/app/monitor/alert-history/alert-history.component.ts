import { Component, OnInit, ViewChild, ChangeDetectorRef } from '@angular/core';
import { SearchListComponent } from 'app/libraries/search-list/search-list.component';

@Component({
  selector: 'app-alert-history',
  templateUrl: './alert-history.component.html',
  styleUrls: ['./alert-history.component.css']
})
export class AlertHistoryComponent implements OnInit {

  @ViewChild('searchList') searchListComponent!: SearchListComponent;
  listData = [
    {aid: 1, ondate:"2024-09-14", stn_name: "Autonagar", prop_name: "Trendset Mall", address: "Benzcircle, Vijayawada", occu: "Mercantile", status: "Unconfirmed", lastUpdate: "2024-09-14T04:00:00"},
    {aid: 2, ondate:"2024-09-14", stn_name: "Vijayawada", prop_name: "Unity Office Building", address: "Bandar Road, Vijayawada", occu: "Business", status: "Active", lastUpdate: "2024-09-14T03:00:00"}
  ];

  searchConfig = {
    "search": {
      "criteria": [
        {"id": "from", "type": "date", "label": "From", "list": {}},
        {"id": "to", "type": "text", "label": "From", "list": {}},
        {"id": "stn", "type": "select", "label": "Station", 
          "list": {"type": "c", "cb": {"code": "stations", "value": "id", "display": "name"}, "list": []}
        },
        {"id": "occu", "type": "select", "label": "Occupancy", 
          "list": {"type": "l", "cb": {},
            "list": [
              {"value": "a", "display": "Residential"},
              {"value": "b", "display": "Educational"},
              {"value": "c", "display": "Institutional"},
              {"value": "d", "display": "Assembly"}
            ]
          }
        }
      ]
    },
    "list": {
      "id": "aid",
      "export2excel": true,
      "add": false,
      "fields": [
        {"field": "ondate", "dtype": "date", "sortable": true, "label": "On"},
        {"field": "stn_name", "dtype": "string", "sortable": true, "label": "Fire Station"},
        {"field": "prop_name", "dtype": "string", "sortable": true, "label": "Property"},
        {"field": "address", "dtype": "string", "sortable": false, "label": "Address"},
        {"field": "occu", "dtype": "string", "sortable": true, "label": "Occupancy"},
        {"field": "status", "dtype": "string", "sortable": true, "label": "Status"},
        {"field": "lastupdate", "dtype": "string", "sortable": true, "label": "Last Update"}
      ],
      "actions": [
          {"code": "view", "icon": "visibility"}
      ]
    }
  }

  constructor(private cdr: ChangeDetectorRef) { }

  ngOnInit(): void {
  }

  fetchData(searchCriteria: any) {
    const tempData = [
      {aid: 3, ondate:"2024-09-13", stn_name: "Vijayawada", prop_name: "PVP One", address: "Near Stadium, Bandar Road, Vijayawada", occu: "Mercantile", status: "Closed", lastUpdate: "2024-09-14T04:00:00"}
    ];
    this.listData.push(tempData[0]);
  }

  onAdd() {
    // Handle add action
  }

  exportToExcel(data: any[]) {
    // Handle export to excel
  }

  fetchSelectOptions(id: string) {
    // Fetch select options dynamically for "c" type lists
  }

  onRowAction(event: { id: any, code: string }) {
    if ( event.code === "view") {
      const url = '#/monitor/alert';// + id;  // URL to open
      window.open(url, '_blank');  // Opens in a new tab
    }
  }

}
