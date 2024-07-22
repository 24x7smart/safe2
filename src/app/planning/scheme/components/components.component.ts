import { Component, OnInit } from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {SectorType} from '../../../models/sector-type.model';
import { SecTypeService } from '../../../services/sec-type.service';

@Component({
  selector: 'app-components',
  templateUrl: './components.component.html',
  styleUrls: ['./components.component.css'],
  providers: [SecTypeService]
})
export class ComponentsComponent implements OnInit {

  constructor(private sectypeService: SecTypeService) { }

  scale = [{id: 1, code: 'AdSP'}, {id: 2, code: 'ASP/DSP'}, {id: 3, code: 'CI/RI'}, {id: 4, code:'ASI/HC'}, {id: 5, code:'PC/HG'}, {id: 6, code:'WPC/WHG'}, {id: 7, code:'ARPC'}, {id: 8, code:'CPMF'}];
  components: SectorType[] = [];

  async ngOnInit() {
    this.components = await this.sectypeService.getComponents();
  }

  addRow() {
    this.sectypeService.addNew();
  }

  deleteRow(index: number) {
    this.sectypeService.deleteRow(index);
  }

  Of(sect: SectorType, r: string): number {
    return sect.ranks.find(eachr => eachr.r === r).c;
  }

  SaveComponents() {
    this.sectypeService.updateComponents();
  }
}
