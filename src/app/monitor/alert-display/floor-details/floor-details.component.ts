import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-floor-details',
  templateUrl: './floor-details.component.html',
  styleUrls: ['./floor-details.component.css']
})
export class FloorDetailsComponent implements OnInit {
  @Input() floorId: number | null = null; // Input property to receive the building ID
  fullScreen: boolean = false;

  detectors = [
    {id: 1, code: '1F1', loc: 'Laundry', alert: true, fault: false, left: '15%', top: '19%'},
    {id: 2, code: '1F2', loc: 'Stairs 1', alert: false, fault: false, left: '6%', top: '24%'},
    {id: 3, code: '1F3', loc: 'Store', alert: true, fault: false, left: '24%', top: '12%'},
    {id: 4, code: '1F4', loc: 'Kitchen', alert: false, fault: true, left: '36%', top: '11%'},
    {id: 5, code: '1F5', loc: 'Pantry', alert: false, fault: false, left: '23%', top: '28%'},
    {id: 6, code: '1F6', loc: 'Corridor', alert: false, fault: false, left: '25%', top: '44%'},
    {id: 7, code: '1FM1', loc: 'Lobby', alert: true, fault: false, left: '9%', top: '44%'},
    {id: 8, code: '1F7', loc: 'Restuarant', alert: false, fault: false, left: '53%', top: '38%'},
    {id: 9, code: '1F8', loc: 'Sit Out', alert: false, fault: false, left: '94%', top: '22%'},
    {id: 10, code: '1F9', loc: 'Toilets', alert: false, fault: false, left: '84%', top: '42%'},
    {id: 11, code: '1F10', loc: 'Bar', alert: false, fault: false, left: '73%', top: '54%'},
  ];
  // Columns to display
  displayedColumns: string[] = ['code', 'loc', 'alert'];

  block = {
    status: "Unconfirmed",
    block: {
      id: 1,
      name: "Main Building",
      height: 26,
      total_occu: 1060,
      occupancy: "Commercial",
      sub_occu: "Multiplex",
      pumps: [
        {id: 1, type:"Jockey", capacity: "280 hp", running: true, supply: "E", on: true},
        {id: 1, type:"Main", capacity: "2500 hp", running: true, supply: "D", on: true},
        {id: 1, type:"Main", capacity: "2500 hp", running: true, supply: "E", on: true},
        {id: 1, type:"Booster", capacity: "280 hp", running: false, supply: "E", on: false},
      ],
      lines: [
        {id: 1, type:"Hydrant", threshold: 1.4, pressure: 1.5, flowing: true},
        {id: 2, type:"Sprinkler", threshold: 1.4, pressure: 1.2, flowing: false},
      ],
      tanks: [
        {id: 1, type:"Underground", capacity: 125000, fullness: 0.5},
        {id: 2, type:"Terrace", capacity: 25000, fullness: 1.0}
      ]
    }
  };

  constructor() { }

  ngOnInit(): void {
    this.floorId = 9;
  }

  setFloor(id: number) {
    this.floorId = id;
  }

  get imageUrl(): string {
    return this.floorId ? `assets/img/plans/1/${this.floorId}.png` : '';
  }  

  toggleFullScreen() {
    //this.fullScreen = !this.fullScreen;
  }  
}
