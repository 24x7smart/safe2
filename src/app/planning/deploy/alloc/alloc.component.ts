import { Component, OnInit } from '@angular/core';
import {MatIconModule} from '@angular/material/icon';
import { Router } from '@angular/router';
import { SectorType } from 'app/models/sector-type.model';
import { Scheme, Zone } from 'app/models/sectors.model';
import { SchemeService } from 'app/services/scheme.service';
import { SecTypeService } from 'app/services/sec-type.service';

@Component({
  selector: 'app-alloc',
  templateUrl: './alloc.component.html',
  styleUrls: ['./alloc.component.css']
})
export class AllocComponent implements OnInit {

  constructor(
    private sectypeService: SecTypeService,
    private schemeService: SchemeService,
    private router: Router
    ) { }

  scale = [{id: 1, code: 'AdSP', s: 1}, {id: 2, code: 'ASP/ DSP', s: 2}, {id: 3, code: 'CI/ RI', s: 3}, {id: 4, code:'ASI/ HC', s: 4}, {id: 5, code:'PC/ HG', s: 5},
    {id: 6, code:'WPC/ WHG', s: 6}, {id: 7, code:'ARPC', s: 7}, {id: 8, code:'CPMF', s: 8}];  
  
  components : SectorType[] = [];  
  scheme : Scheme;
  picknchoosel : string = "/deploy/picknchoose";

  async ngOnInit() {
    this.components = await this.sectypeService.getComponents();
    this.schemeService.getScheme(1/*EVENT_ID*/).subscribe((scheme: Scheme) => {
      this.scheme = scheme;
    });
  }

  toggle(zone) {
    zone.show = !zone.show;
  }

  toggleMen(sector) {
    sector.show = !sector.show;
  }

  sumRank(zone, rank, fac) {
    const sum : number = zone.sectors.reduce((accumulator, object) => {
      return accumulator + Number(object.ranks[rank.s - 1][fac]);
    }, 0);
    return sum;
  }

  totalRank(rank, fac) {
    const sum = this.scheme.zones.reduce((accumulator, object) => {
      return accumulator + this.sumRank(object, rank, fac);
    }, 0);
    return sum;
  }

  zeroAsSpace(count: number){
    if ( count === 0 ) return '-';
    return count.toString();      
  }

}
