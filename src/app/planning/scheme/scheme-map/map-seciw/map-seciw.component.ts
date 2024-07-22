import { CloseScrollStrategy } from '@angular/cdk/overlay';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { SectorType } from 'app/models/sector-type.model';
import { Sector } from 'app/models/sectors.model';
import { SchemeService } from 'app/services/scheme.service';
import { SecTypeService } from 'app/services/sec-type.service';

export class ActionData {
  constructor(
      public id: number,
      public action: string
  ) {}
}

@Component({
  selector: 'app-map-seciw',
  templateUrl: './map-seciw.component.html',
  styleUrls: ['./map-seciw.component.css']
})
export class MapSeciwComponent implements OnInit {

  scale = [{id: 1, code: 'AdSP', s: 1}, {id: 2, code: 'ASP/ DSP', s: 2}, {id: 3, code: 'CI/ RI', s: 3}, {id: 4, code:'SI/WSI', s: 4}, {id: 5, code:'ASI/ HC', s: 5},
    {id: 6, code:'PC/ HG', s: 6}, {id: 7, code:'WPC/ WHG', s: 7}, {id: 8, code:'CPMF', s: 8}];

  @Input() sector: Sector;
  @Input() component: SectorType;
  @Output() buttonClicked = new EventEmitter<ActionData>();

  constructor(
    private schemeService: SchemeService,
    private sectypeService: SecTypeService
  ) { }

  ngOnInit(): void {
    console.log(this.sector);
  }

  Action(action: string) {
    this.buttonClicked.emit(new ActionData(this.sector.id, action)); // Emit the event with a id
  }

  findNonZero(reqt: any[]): any[] {
    return reqt.filter(p => p.c > 0);
  } 

  findRank(rid: number) {
    return this.scale.filter(r => r.id == rid)[0];
  }

  async sectypeName(id: number) {
    return this.component.name;
  }
}
