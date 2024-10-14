import { Component, OnInit, ViewChild } from '@angular/core';
import { SearchListComponent } from 'app/libraries/search-list/search-list.component';
import { SummaryCardsComponent } from 'app/libraries/summary-cards/summary-cards.component';
import { Device } from 'app/models/device.model';
import { DeviceService } from 'app/services/monitor/device.service';

@Component({
  selector: 'app-prop-approve',
  templateUrl: './prop-approve.component.html',
  styleUrls: ['./prop-approve.component.css']
})
export class PropApproveComponent implements OnInit {
  listData = [];  
  @ViewChild(SearchListComponent, { static: false }) searchListComponent: SearchListComponent;
  @ViewChild(SummaryCardsComponent) summaryComponent!: SummaryCardsComponent;

  constructor(private deviceService: DeviceService) { }

  searchConfig = {
    "search": {
      "criteria": [
        {"id": "step_id", "type": "select", "label": "Process Stage", 
          "list": {"type": "l", "cb": {},
            "list": [
              {"value": "", "display": "All Stages"},
              {"value": "1", "display": "Applied"},
              {"value": "2", "display": "Payment Complete"},
              {"value": "5", "display": "Review by Safe Cell"},
              {"value": "7", "display": "Recommended by Officer"},
              {"value": "8", "display": "Approved"},
              {"value": "9", "display": "Returned"},
              {"value": "10", "display": "Installed"}
            ]
          }
        },
        {"id": "building.name", "type": "text", "label": "Property Name", "list": {}},
        {"id": "building.stn", "type": "select", "label": "Station", 
          "list": {"type": "c", "cb": {"code": "stations", "value": "id", "display": "name"}, "list": []}
        }
      ]
    },
    "list": {
      "id": "device_id",
      "export2excel": true,
      "add": false,
      "select": "radio",
      "fields": [
        {"field": "building.firestation", "dtype": "string", "label": "Fire Station" , "sortable": true},
        {"field": "building.name", "dtype": "string", "label": "Property Name" , "sortable": true},
        {"field": "building.occu", "dtype": "string", "label": "Occupancy", "sortable": true},
        {"field": "building.noc", "dtype": "string", "label": "NOC", "sortable": false},
        {"field": "step_id", "dtype": "string", "label": "Process Stage", "sortable": false}
      ],
      "actions": [
        {"code": "view", "icon": "visibility", "label": "View", "cfield": ""},
        {"code": "view", "icon": "cast", "label": "Device Info", "cfield": "noc", "cvalue": "", "condition": "!=="}
      ]
    }
  };

  summaryData = { 
    config: {
      class: "col-md-2"
    },
    cards: [
    {icon: 'edit_note', label: 'Applied', function: 'COUNT', field: '', check_field: 'step_id', check_value: 1},
    {icon: 'payments', label: 'Paid', function: 'COUNT', field: '', check_field: 'step_id', check_value: 2},
    {icon: 'rate_review', label: 'Reviewed', function: 'COUNT', field: '', check_field: 'step_id', check_value: 5},
    {icon: 'recommend', label: 'Recommended', function: 'COUNT', field: '', check_field: 'step_id', check_value: 7},
    {icon: 'approval_delegation', label: 'Approved', function: 'COUNT', field: '', check_field: 'step_id', check_value: 8}
  ]};

  ngOnInit(): void {
  }

  fetchData(searchCriteria: any) {
    console.log(searchCriteria);
    this.deviceService.searchDevices("P").subscribe(
      (data: Device[]) => {
        this.listData = data;  // Assign the response to the buildings member variable
        this.searchListComponent.setListData(data);

        // Call the setListData method on the child component
        this.summaryComponent.setData(this.listData);     
      },
      (error) => {
        console.error('Error loading buildings:', error);  // Handle error
      }
    );
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
