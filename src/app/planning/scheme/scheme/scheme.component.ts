import { Component, OnInit } from '@angular/core';
import {MatIconModule} from '@angular/material/icon';
import { SectorType } from 'app/models/sector-type.model';
import { Scheme, Sector, Zone } from 'app/models/sectors.model';
import { SchemeService } from 'app/services/scheme.service';
import { SecTypeService } from 'app/services/sec-type.service';

@Component({
  selector: 'app-scheme',
  templateUrl: './scheme.component.html',
  styleUrls: ['./scheme.component.css']
})
export class SchemeComponent implements OnInit {

  constructor(private sectypeService: SecTypeService, private schemeService: SchemeService) { }
  scale = [{id: 1, code: 'AdSP', s: 1}, {id: 2, code: 'ASP/ DSP', s: 2}, {id: 3, code: 'CI/ RI', s: 3}, {id: 4, code:'SI/WSI', s: 4}, {id: 5, code:'ASI/ HC', s: 5},
         {id: 6, code:'PC/ HG', s: 6}, {id: 7, code:'WPC/ WHG', s: 7}, {id: 8, code:'CPMF', s: 8}];
  components: SectorType[] = [];

  scheme : Scheme;

  async ngOnInit() {
    this.components = await this.sectypeService.getComponents();
    this.schemeService.getScheme(1/*EVENT_ID*/).subscribe(scheme =>{
      this.scheme = scheme;
    });
  }

  addRow(zone: Zone) {
    var sector:Sector = this.schemeService.addSector(zone);
    if (!('sectors' in zone)) {
      zone.sectors = [];
    }
    zone.sectors.push(sector);
    zone.show = true;
  }

  addZone() {
    this.schemeService.addZone(this.scheme);
  }

  deleteRow(zone: Zone, index: number) {
    this.schemeService.deleteSector(this.scheme, zone, index);
  }

  deleteZone(index: number) {
    this.schemeService.deleteZone(this.scheme, index);
  }

  toggle(zone) {
    zone.show = !zone.show;
  }

  sumRank(zone, rankf) : number {
    const sum : number = zone.sectors?.reduce((accumulator, object) => {
      return accumulator + Number(object.ranks[rankf.s - 1].c);
    }, 0);
    return sum;
  }

  totalRank(rank) {
    const sum = this.scheme?.zones.reduce((accumulator, object) => {
      return accumulator + this.sumRank(object, rank);
    }, 0);
    return sum;
  }

  SaveAll() {
    this.schemeService.update(this.scheme.hkey, this.scheme).subscribe(() => {});
  }

}
