import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-block-details',
  templateUrl: './block-details.component.html',
  styleUrls: ['./block-details.component.css']
})
export class BlockDetailsComponent implements OnInit {

  block = {
    status: "Unconfirmed",
    property: {
      id: 1,
      name: "Trendset Mall",
      address: "No. 40, 1-56, MG Rd, Sai Nagar, Benz Circle, Vijayawada 520008",
      NOC: "2345/MSB/NTR/2021",
      active: true,
      NOCdate: "2024-11-30",
      prop_lat: 16.49822702874503,
      prop_lng: 80.65403823147136,
      fire_station: "Vijayawada",
      station_lat: 16.510864119581893, 
      station_lng: 80.61816881906076,
    },
    contacts: [
      {id: 1, name: "Ramesh Kumar", role: "Owner", mobile: "9949011533"},
      {id: 2, name: "Srinivasa Rao", role: "Manager", mobile: "7702311533"},
      {id: 3, name: "Hanumath Prasad", role: "Technician", mobile: "7702211533"},
    ],
    block: {
      id: 1,
      name: "Main Building",
      height: 26,
      total_occu: 1060,
      occupancy: "Commercial",
      sub_occu: "Multiplex"
    }
  };
  displayedColumns: string[] = ['name', 'role', 'mobile'];

  constructor() { }

  ngOnInit(): void {
  }

}
