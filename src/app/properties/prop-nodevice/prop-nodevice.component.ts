import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { SafeGoogleMapComponent } from 'app/libraries/safe-google-map/safe-google-map.component';
import { SearchListComponent } from 'app/libraries/search-list/search-list.component';
import { SummaryCardsComponent } from 'app/libraries/summary-cards/summary-cards.component';
import { Building } from 'app/models/building.model';
import { DeviceService } from 'app/services/monitor/device.service';

@Component({
  selector: 'app-prop-nodevice',
  templateUrl: './prop-nodevice.component.html',
  styleUrls: ['./prop-nodevice.component.css']
})
export class PropNodeviceComponent implements OnInit {

  @ViewChild(SearchListComponent, { static: false }) searchListComponent: SearchListComponent;
  @ViewChild(SafeGoogleMapComponent) googleMapComponent!: SafeGoogleMapComponent;
  @ViewChild(SummaryCardsComponent) summaryComponent!: SummaryCardsComponent;

  @ViewChild('infoTemplate') infoTemplate!: TemplateRef<any>;

  listData = [];  

  searchConfig = {
    "search": {
      "criteria": [
        {"id": "occu", "type": "select", "label": "Occupancy", 
          "list": {"type": "l", "cb": {},
            "list": [
              {"value": "", "display": "All Occupancies"},
              {"value": "A5", "display": "Hotel"},
              {"value": "F1", "display": "Commercial"},
              {"value": "B2", "display": "Professional Educational Institution"},
              {"value": "C1", "display": "Hospitals and Sanatoria"},
              {"value": "D1", "display": "Assembly"}
            ]
          }
        },
        {"id": "name", "type": "text", "label": "Property Name", "list": {}},
        {"id": "stn", "type": "select", "label": "Station", 
          "list": {"type": "c", "cb": {"code": "stations", "value": "id", "display": "name"}, "list": []}
        }
      ]
    },
    "list": {
      "id": "build_id",
      "export2excel": true,
      "add": false,
      "select": "",
      "fields": [
        {"field": "firestation", "dtype": "string", "label": "Fire Station" , "sortable": true},
        {"field": "name", "dtype": "string", "label": "Property Name" , "sortable": true},
        {"field": "address", "dtype": "string", "label": "Address" , "sortable": false},
        {"field": "occu", "dtype": "string", "label": "Occupancy", "sortable": true},
        {"field": "noc", "dtype": "string", "label": "NOC", "sortable": false}
      ],
      "actions": [
        {"code": "view", "icon": "visibility", "label": "View", "cfield": ""},
        {"code": "apply", "icon": "edit_note", "label": "Apply for Device", "cfield": ""}
      ]
    }
  };

  // Map configuration with center and zoom level
  mapConfig = {
    center: { lat: 16.509173261429932, lng: 80.66136286996687 },
    zoom: 10
  };

  summaryData = { 
    config: {
      class: "col-md-5"
    },
    cards: [
      {icon: 'functions', label: 'Total', function: 'COUNT', field: '', check_field: '', check_value: ''},
      {icon: 'cancel', label: 'No Device', function: 'COUNT', field: '', check_field: 'noc', check_value: ''}
    ]};

  constructor(private deviceService: DeviceService) { }

  ngOnInit(): void {

  }

  fetchData(searchCriteria: any) {
    console.log(searchCriteria);
    this.deviceService.getNoDeviceBuildings().subscribe(
      (data: Building[]) => {
        this.listData = data;  // Assign the response to the buildings member variable
        this.searchListComponent.setListData(data);

        // Call the setListData method on the child component
        this.googleMapComponent.setListData(this.listData);   
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
    if ( event.code === "view") {
      const url = '#/properties/property';// + id;  // URL to open
      window.open(url, '_blank');  // Opens in a new tab
    }
  }

}
