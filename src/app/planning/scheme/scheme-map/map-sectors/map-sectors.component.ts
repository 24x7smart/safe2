import { Component, OnInit } from '@angular/core';
import { SectorType } from 'app/models/sector-type.model';
import { Scheme, Sector, Zone } from 'app/models/sectors.model';
import { SchemeService } from 'app/services/scheme.service';
import { SecTypeService } from 'app/services/sec-type.service';

@Component({
  selector: 'app-map-sectors',
  templateUrl: './map-sectors.component.html',
  styleUrls: ['./map-sectors.component.css']
})
export class MapSectorsComponent implements OnInit {
  scale = [{id: 1, code: 'AdSP', s: 1}, {id: 2, code: 'ASP/ DSP', s: 2}, {id: 3, code: 'CI/ RI', s: 3}, {id: 4, code:'SI/WSI', s: 4}, {id: 5, code:'ASI/ HC', s: 5},
    {id: 6, code:'PC/ HG', s: 6}, {id: 7, code:'WPC/ WHG', s: 7}, {id: 8, code:'CPMF', s: 8}];
  scheme : Scheme;
  components: SectorType[] = [];

  constructor(
    private schemeService: SchemeService,
    private sectypeService: SecTypeService
  ) { }

  async ngOnInit() {
    this.schemeService.getScheme(1/*EVENT_ID*/).subscribe((scheme: Scheme) => {
      this.scheme = scheme;
    });
    this.components = await this.sectypeService.getComponents();
  }

  toggle(zone: Zone, event: Event) {
    zone.show = !zone.show;
    // TODO Only One Parameter is being recieved
    event.stopPropagation();
  }

  async getSectorTypeDesc(sector: Sector) {
    var comp = this.components.find(compe => compe.id == sector.type); 
    return comp?.name;
  }

  AddIconStart(e: any) {
//    alert(e.target.id);
    e.dataTransfer.setData('text/plain', 'P,' + e.target.id + ',0');
  }

}
