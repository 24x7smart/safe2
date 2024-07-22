import { Component, ElementRef, OnInit, Renderer2 } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Person } from 'app/models/person.model';
import { Unit } from 'app/models/unit.model';
import { PersonnelService } from 'app/services/personnel.service';
import { EditPersonComponent } from './edit-person/edit-person.component';

@Component({
  selector: 'app-personnel',
  templateUrl: './personnel.component.html',
  styleUrls: ['./personnel.component.css']
})
export class PersonnelComponent implements OnInit {

  constructor(private renderer: Renderer2, private el: ElementRef, private personService: PersonnelService, private dialog: MatDialog) { }

  import_unit = "Vizianagaram";
  scale = [{ id: 1, code: 'AdSP' }, { id: 2, code: 'ASP/ DSP' }, { id: 3, code: 'CI/ RI' }, { id: 4, code: 'ASI/ HC' }, { id: 5, code: 'PC/ HG' }, { id: 6, code: 'WPC/ WHG' }, { id: 7, code: 'ARPC' }, { id: 8, code: 'CPMF' }];
  stats = {
    required: { 1: 1, 2: 4, 3: 10, 4: 20, 5: 50, 6: 20, 7: 0, 8: 0 },
    received: { 1: 1, 2: 3, 3: 9, 4: 22, 5: 47, 6: 20, 7: 0, 8: 0 }
  };
  persons: Person[] = [];

  units: Unit[] = [
    { id: 11, name: "Hyderabad", recieved: true, percent: 90, hkey: '', ishome: true, ranks: [] },
    { id: 1, name: "Khamman", recieved: true, percent: 100, hkey: '', ishome: false, ranks: [] },
    { id: 2, name: "Warangal", recieved: true, percent: 95, hkey: '', ishome: false, ranks: [] },
    { id: 3, name: "Jangaon", recieved: true, percent: 90, hkey: '', ishome: false, ranks: [] },
    { id: 4, name: "Karimnagar", recieved: true, percent: 100, hkey: '', ishome: false, ranks: [] },
    { id: 5, name: "Nizamabad", recieved: true, percent: 50, hkey: '', ishome: false, ranks: [] },
    { id: 6, name: "Adilabad", recieved: true, percent: 100, hkey: '', ishome: false, ranks: [] },
    { id: 7, name: "Nirmal", recieved: true, percent: 70, hkey: '', ishome: false, ranks: [] },
    { id: 8, name: "Sangareddy", recieved: false, percent: 0, hkey: '', ishome: false, ranks: [] },
    { id: 9, name: "Mahbubnagar", recieved: false, percent: 0, hkey: '', ishome: false, ranks: [] },
    { id: 10, name: "Nalgonda", recieved: false, percent: 0, hkey: '', ishome: false, ranks: [] }
  ];


  async ngOnInit() {
    this.persons = await this.personService.getPersons();
  }

  handleImport(unit: string) {
    this.import_unit = unit;
    const anchorElement = this.el.nativeElement.querySelector('#ancImport');
    if (anchorElement) {
      this.renderer.selectRootElement(anchorElement).click();
    }
  }

  addNew() {
    var person: Person = this.personService.addNew();

    const dialogRef = this.dialog.open(EditPersonComponent, {
      width: '600px', // Adjust width as necessary
      data: { persons: this.persons, person: person }
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.personService.updatePersons();
      }
    });
  }
}
