import { Component, OnInit } from '@angular/core';
import { SearchListComponent } from 'app/libraries/search-list/search-list.component';

@Component({
  selector: 'app-active-list',
  templateUrl: './active-list.component.html',
  styleUrls: ['./active-list.component.css']
})
export class ActiveListComponent implements OnInit {

  listData = [
    {aid: 1, since:"2024-01-14", age: 195, stn_name: "Autonagar", prop_name: "Trendset Mall", address: "Benzcircle, Vijayawada", occu: "Mercantile", status: "Unconfirmed", lastUpdate: "2024-09-14T04:00:00"},
    {aid: 2, since:"2024-03-21", age: 161, stn_name: "Vijayawada", prop_name: "Unity Office Building", address: "Bandar Road, Vijayawada", occu: "Business", status: "Active", lastUpdate: "2024-09-14T03:00:00"}
  ];  

  searchConfig = {
    "search": {
      "criteria": [
        {"id": "occu", "type": "select", "label": "Occupancy", 
          "list": {"type": "l", "cb": {},
            "list": [
              {"value": "a", "display": "Residential"},
              {"value": "b", "display": "Educational"},
              {"value": "c", "display": "Institutional"},
              {"value": "d", "display": "Assembly"}
            ]
          }
        },
        {"id": "name", "type": "text", "label": "Property Name", "list": {}},
        {"id": "stn", "type": "select", "label": "Station", 
          "list": {"type": "c", "cb": {"code": "stations", "value": "id", "display": "name"}, "list": []}
        },
        {"id": "ftype", "type": "select", "label": "Fault Type", 
          "list": {"type": "l", "cb": {},
            "list": [
              {"value": "o", "display": "Gateway Off"},
              {"value": "d", "display": "Faulty Detector"},
              {"value": "p", "display": "Faulty Pumps & Lines"},
              {"value": "w", "display": "Low Water"}
            ]
          }
        },
        {"id": "age", "type": "select", "label": "Age", 
          "list": {"type": "l", "cb": {},
            "list": [
              {"value": "q", "display": "More than 3 Months"},
              {"value": "m", "display": "1 to 3 Months"},
              {"value": "f", "display": "2 - 4 Weeks"},
              {"value": "w", "display": "1 - 2 Weeks"},
              {"value": "d", "display": "Less than a Week"},
            ]
          }
        }
      ]
    },
    "list": {
      "id": "id",
      "export2excel": true,
      "add": false,
      "fields": [
        {"field": "since", "dtype": "date", "label": "Since" ,"sortable": true},
        {"field": "age", "dtype": "string", "label": "Age" , "sortable": true},
        {"field": "stn_name", "dtype": "string", "label": "Fire Station" , "sortable": true},
        {"field": "prop_name", "dtype": "string", "label": "Property Name" , "sortable": true},
        {"field": "address", "dtype": "string", "label": "Address" , "sortable": false},
        {"field": "occu", "dtype": "string", "label": "Occupancy", "sortable": true},
        {"field": "last_update", "dtype": "date", "label": "Last Update" ,"sortable": false},
      ],
      "actions": [
        {"code": "view", "icon": "visibility"}
      ]
    }
  };

  constructor() { }

  ngOnInit(): void {
  }

  fetchData(searchCriteria: any) {

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
      const url = '#/faults/property';// + id;  // URL to open
      window.open(url, '_blank');  // Opens in a new tab
    }
  }

}
