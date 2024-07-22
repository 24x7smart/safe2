import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA  } from '@angular/material/dialog';
import { Scheme, Sector, Zone } from 'app/models/sectors.model';
import { SchemeService } from 'app/services/scheme.service';
import { SecTypeService } from 'app/services/sec-type.service';

@Component({
  selector: 'app-sector-edit',
  templateUrl: './sector-edit.component.html',
  styleUrls: ['./sector-edit.component.css']
})
export class SectorEditComponent implements OnInit {

  lsector: any;
  scheme: Scheme;
  zone: Zone;
  sector: Sector;

  scale = [{id: 1, code: 'AdSP', s: 1}, {id: 2, code: 'ASP/ DSP', s: 2}, {id: 3, code: 'CI/ RI', s: 3}, {id: 4, code:'SI/WSI', s: 4}, {id: 5, code:'ASI/ HC', s: 5},
    {id: 6, code:'PC/ HG', s: 6}, {id: 7, code:'WPC/ WHG', s: 7}, {id: 8, code:'CPMF', s: 8}];

  constructor(public dialogRef: MatDialogRef<SectorEditComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private schemeService: SchemeService,
    private sectypeService: SecTypeService
  ) { 
    this.lsector = { ...data.sector }; // Initialize 'sector' from input data
    this.scheme = data.scheme;
  }

  ngOnInit() {
    this.zone = this.schemeService.getZoneById(this.scheme, this.lsector.zid);
    this.lsector.zone = this.zone?.zname;

    this.sector = this.schemeService.addSector(this.zone);
    this.sector.type = this.lsector.tid;

    console.log(this.sector);
  }

  scaleName(r: number): string {
    return this.scale.find(sr => sr.id == r)?.code;
  } 

  onOkClick(): void {
    // Optionally perform validation or other actions before closing

    this.zone.sectors.push(this.sector);
    this.dialogRef.close(this.sector); // Pass updated 'sector' back to caller
  }

  onCancelClick(): void {
    this.dialogRef.close(); // Close dialog without returning data
  }
  
}
