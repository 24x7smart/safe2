import { Component, OnInit } from '@angular/core';
import { SectorType } from 'app/models/sector-type.model';
import { Scheme, Zone } from 'app/models/sectors.model';
import { SchemeService } from 'app/services/scheme.service';
import { SecTypeService } from 'app/services/sec-type.service';

@Component({
  selector: 'app-map-addicons',
  templateUrl: './map-addicons.component.html',
  styleUrls: ['./map-addicons.component.css']
})
export class MapAddiconsComponent implements OnInit {

  components: SectorType[] = [];  
  scheme: Scheme;
  zdata: { zone: number } = { zone: 0 };

  constructor(private sectypeService: SecTypeService, private schemeService: SchemeService) { }

  async ngOnInit() {
    this.components = await this.sectypeService.getComponents();
    this.schemeService.getScheme(1/*EVENT_ID*/).subscribe((scheme: Scheme) => {
      this.scheme = scheme;
    });
  }

  AddIconStart(e: any) {
    e.dataTransfer.setData('text/plain', 'A,' + e.target.id + ',' + this.zdata.zone);
  }
}
