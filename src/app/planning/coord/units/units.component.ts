import { Component, OnInit } from '@angular/core';
import { Unit } from 'app/models/unit.model';
import { UnitService } from 'app/services/unit.service';

@Component({
  selector: 'app-units',
  templateUrl: './units.component.html',
  styleUrls: ['./units.component.css']
})
export class UnitsComponent implements OnInit {

  constructor(private unitService: UnitService) { }

  scale = [{id: 1, code: 'AdSP'}, {id: 2, code: 'ASP/DSP'}, {id: 3, code: 'CI/RI'}, {id: 4, code:'ASI/HC'}, {id: 5, code:'PC/HG'}, {id: 6, code:'WPC/WHG'}, {id: 7, code:'ARPC'}, {id: 8, code:'CPMF'}];

  units : Unit[];
/*   = [
    {id: 11, name: "Hyderabad", recieved: true, percent: 90, hkey: '', ishome: true, ranks: []},
    {id: 1, name: "Khamman", recieved: true, percent: 100, hkey: '', ishome: false, ranks: []},
    {id: 2, name: "Warangal", recieved: true, percent: 95, hkey: '', ishome: false, ranks: []},
    {id: 3, name: "Jangaon", recieved: true, percent: 90, hkey: '', ishome: false, ranks: []},
    {id: 4, name: "Karimnagar", recieved: true, percent: 100, hkey: '', ishome: false, ranks: []},
    {id: 5, name: "Nizamabad", recieved: true, percent: 50, hkey: '', ishome: false, ranks: []},
    {id: 6, name: "Adilabad", recieved: true, percent: 100, hkey: '', ishome: false, ranks: []},
    {id: 7, name: "Nirmal", recieved: true, percent: 70, hkey: '', ishome: false, ranks: []},
    {id: 8, name: "Sangareddy", recieved: false, percent: 0, hkey: '', ishome: false, ranks: []},
    {id: 9, name: "Mahbubnagar", recieved: false, percent: 0, hkey: '', ishome: false, ranks: []},
    {id: 10, name: "Nalgonda", recieved: false, percent: 0, hkey: '', ishome: false, ranks: []}
  ];
  */

  async ngOnInit() {
     this.units = await this.unitService.getUnits();
     console.log(this.units);
 }

  addRow() {
    
  }
}
