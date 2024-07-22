import { Component, OnInit } from '@angular/core';
import { MatSelectChange } from '@angular/material/select';
import { ScaleItem } from 'app/models/sector-type.model';
import { Scheme, Sector, Zone } from 'app/models/sectors.model';
import { SchemeService } from 'app/services/scheme.service';
import {CdkAccordionModule} from '@angular/cdk/accordion';

@Component({
  selector: 'app-picknchoose',
  templateUrl: './picknchoose.component.html',
  styleUrls: ['./picknchoose.component.css']
})
export class PicknChooseComponent implements OnInit {

  constructor(private schemeService: SchemeService) { }

  scale = [{id: 1, code: 'AdSP', s: 1}, {id: 2, code: 'ASP/ DSP', s: 2}, {id: 3, code: 'CI/ RI', s: 3}, {id: 4, code:'ASI/ HC', s: 4}, {id: 5, code:'PC/ HG', s: 5},
    {id: 6, code:'WPC/ WHG', s: 6}, {id: 7, code:'ARPC', s: 7}, {id: 8, code:'CPMF', s: 8}];  

  scheme: Scheme;
  selectedZone: Zone;
  selectedSector: Sector;
  selectedRank: string = "-1";

  items = ['Item 1', 'Item 2', 'Item 3', 'Item 4', 'Item 5'];
  expandedIndex = 0;

  ngOnInit(): void {
    this.schemeService.getScheme(1/*EVENT_ID*/).subscribe((scheme: Scheme) => {
      this.scheme = scheme;
    });
  }

  onZoneChange(event: MatSelectChange) {
    console.log(event.value);
    this.selectedZone = this.scheme.zones.find(zone => zone.zid == event.value);
    this.selectedSector = undefined;
    this.selectedRank = "-1";
    console.log(this.selectedZone);
  }

  onSectorChange(event: MatSelectChange) {
    console.log(event.value);
    this.selectedSector = this.selectedZone.sectors.find(sector => sector.id == event.value);
    this.selectedRank = "-1";
    console.log(this.selectedSector);
  }  

  onRankSelect(rank: ScaleItem){
    this.selectedRank = rank.r;
  }

  getRankName(r: string) {
    return this.scale.find(rnk => rnk.id == +r)?.code;
  }

  zeroAsSpace(count: number){
    if ( count === 0 ) return '-';
    return count.toString();      
  }  

  onSectorClick(sector: Sector) {
    this.selectedSector = sector;
  }
}
