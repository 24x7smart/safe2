import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Unit } from 'app/models/unit.model';

@Component({
  selector: 'app-units-summary',
  templateUrl: './units-summary.component.html',
  styleUrls: ['./units-summary.component.css']
})
export class UnitsSummaryComponent implements OnInit {

  @Output() importClicked: EventEmitter<string> = new EventEmitter<string>();

  constructor() { }

  units : Unit[] = [
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


  ngOnInit(): void {
  }

  OnImportClick(name: string) {
    this.importClicked.emit(name);
  }

}
