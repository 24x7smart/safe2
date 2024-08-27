import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Person } from 'app/models/person.model';
import { Unit } from 'app/models/unit.model';
import { UnitService } from 'app/services/unit.service';

@Component({
  selector: 'app-edit-person',
  templateUrl: './edit-person.component.html',
  styleUrls: ['./edit-person.component.css']
})
export class EditPersonComponent implements OnInit {

  person: Person = null;
  persons: Person[] = [];
  units : Unit[];
  ranks: { id: number, name: string }[] = [
    { id: 1, name: 'Ad. SP' },
    { id: 2, name: 'ASP' },
    { id: 3, name: 'DSP' },
    { id: 4, name: 'CI' },
    { id: 5, name: 'RI' },
    { id: 6, name: 'SI' },
    { id: 7, name: 'RSI' },
    { id: 8, name: 'ARSI' },
    { id: 9, name: 'HC' },
    { id: 10, name: 'ARHC' },
    { id: 11, name: 'PC' },
    { id: 12, name: 'WPC' },
    { id: 13, name: 'ARPC' },
    { id: 14, name: 'HG' },
    { id: 15, name: 'WHG' },
    { id: 16, name: 'CMPF' }
  ];

  constructor(public dialogRef: MatDialogRef<EditPersonComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any, private unitService: UnitService) {
        this.person = data.person;
        this.persons = data.persons;
    }
  
  async ngOnInit() {
    this.units = await this.unitService.getUnits();
  }

  onOkClick(): void {
    const unitId = 0; //this.searchForm.get('unit')?.value;
    const selectedUnit = this.units.find(unit => unit.id === unitId);
    
    console.log(this.person);
    this.person.uname = this.units.find(unit => unit.id === this.person.unit).name;
    this.person.rname = this.ranks.find(rank => rank.id === this.person.rank).name;
    this.persons.push(this.person);
    this.dialogRef.close(this.person); // Pass updated 'person' back to caller
  }

  onCancelClick(): void {
    this.dialogRef.close(); // Close dialog without returning data
  }

}
