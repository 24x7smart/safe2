import { Component, Input, OnInit } from '@angular/core';
import { Sector } from 'app/models/sectors.model';

@Component({
  selector: 'app-sector-alloc',
  templateUrl: './sector-alloc.component.html',
  styleUrls: ['./sector-alloc.component.css']
})
export class SectorAllocComponent implements OnInit {

  constructor() { }

  @Input() sector: Sector;

  scale = [{id: 1, code: 'AdSP', s: 1}, {id: 2, code: 'ASP/ DSP', s: 2}, {id: 3, code: 'CI/ RI', s: 3}, {id: 4, code:'ASI/ HC', s: 4}, {id: 5, code:'PC/ HG', s: 5},
    {id: 6, code:'WPC/ WHG', s: 6}, {id: 7, code:'ARPC', s: 7}, {id: 8, code:'CPMF', s: 8}];  

  deploy = {
    id: 1, incharge: 2,
    allocated : [
      {id: 1, ID: 'TS34356I2', name: 'Ramesh Kumar', rank: 'ACP', gnum: '', unit: 'WGL', phone: '9349011531', shift: 2, deleted: 0},
      {id: 2, ID: 'TS34356I4', name: 'Srinivas Rao', rank: 'PC', gnum: '3451', unit: 'KRMR', phone: '9949011522', shift: 1, deleted: 0}
    ] 
  };  

  ngOnInit(): void {
  }

  incharge() {
    const per = this.deploy.allocated.find(i => i.id === this.deploy.incharge);
    return per;
  }

  makeIncharge(pers) {
    this.deploy.incharge = pers.id;
  }

  unalloc(index) {
    this.deploy.allocated.splice(index, 1);
  }

  remIncharge() {
    alert('ok');
    this.deploy.incharge = 0;
  }

  getRankName(r: string) {
    return this.scale.find(rnk => rnk.id == +r)?.code;
  }

  zeroAsSpace(count: number){
    if ( count === 0 ) return '-';
    return count.toString();      
  }    
}
