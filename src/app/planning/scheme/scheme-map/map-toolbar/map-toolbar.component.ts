import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { SectorType } from 'app/models/sector-type.model';
import { Scheme, Zone } from 'app/models/sectors.model';
import { SchemeService } from 'app/services/scheme.service';
import { SecTypeService } from 'app/services/sec-type.service';

@Component({
  selector: 'app-map-toolbar',
  templateUrl: './map-toolbar.component.html',
  styleUrls: ['./map-toolbar.component.css']
})
export class MapToolbarComponent implements OnInit {

  components: SectorType[] = [];  
  scheme: Scheme;

  @Output()
  click: EventEmitter<string> = new EventEmitter<string>();

  constructor(private sectypeService: SecTypeService, private schemeService: SchemeService) { }

  async ngOnInit(): Promise<void> {
    this.components = await this.sectypeService.getComponents();

    this.schemeService.getScheme(1/*EVENT_ID*/).subscribe(scheme =>{
      this.scheme = scheme;
    });
  }

  actionClick(action: string) {
    this.click.emit(action);
  }
}
