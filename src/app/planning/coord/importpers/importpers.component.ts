import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-importpers',
  templateUrl: './importpers.component.html',
  styleUrls: ['./importpers.component.css']
})
export class ImportpersComponent implements OnInit {

  @Input() unit: string;
  constructor() { }

  ngOnInit(): void {
  }

}
