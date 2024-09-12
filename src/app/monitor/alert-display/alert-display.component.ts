import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { FloorDetailsComponent } from './floor-details/floor-details.component';

@Component({
  selector: 'app-alert-display',
  templateUrl: './alert-display.component.html',
  styleUrls: ['./alert-display.component.css']
})
export class AlertDisplayComponent implements OnInit {

  selectedTabIndex = 0; // Tracks the active tab (0 = Tab 1, 1 = Tab 2, 2 = Tab 3)
  @ViewChild('floorDetails') floorDetails!: FloorDetailsComponent; // Get reference to the child component

  constructor() { }

  ngOnInit(): void {
  }

  floorSelected(clickedItem: any): void {
    console.log('Item Clicked in Parent:', clickedItem);
    this.floorDetails.setFloor(clickedItem.id);
  }  
}
