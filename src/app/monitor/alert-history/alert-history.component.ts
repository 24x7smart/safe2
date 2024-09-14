import { Component, OnInit } from '@angular/core';
import { SearchListComponent } from 'app/libraries/search-list/search-list.component';

@Component({
  selector: 'app-alert-history',
  templateUrl: './alert-history.component.html',
  styleUrls: ['./alert-history.component.css']
})
export class AlertHistoryComponent implements OnInit {

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

  constructor() { }

  ngOnInit(): void {
  }

  listData = [];

  fetchData(searchCriteria: any) {
    // Handle fetching data based on searchCriteria
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
  }

}
