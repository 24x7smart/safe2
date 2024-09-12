import { Component, OnInit, EventEmitter, Output, Input } from '@angular/core';

@Component({
  selector: 'app-floors',
  templateUrl: './floors.component.html',
  styleUrls: ['./floors.component.css']
})
export class FloorsComponent implements OnInit {

  @Output() itemClicked = new EventEmitter<any>();
  @Input() buildingId: number | null = null; // Input property to receive the building ID

  items = [
    { id: 1, name: 'Basement 2', type: 'B', alert: false, faults: true, sprinkler: false },
    { id: 2, name: 'Basement 1', type: 'B', alert: false, faults: false, sprinkler: false },
    { id: 3, name: 'Stilt', type: 'S', alert: false, faults: false, sprinkler: false },
    { id: 4, name: 'Ground', type: 'G', alert: false, faults: false, sprinkler: false },
    { id: 5, name: 'First Floor', type: 'F', alert: false, faults: false, sprinkler: false },
    { id: 6, name: 'Second  Floor', type: 'F', alert: false, faults: false, sprinkler: false },
    { id: 7, name: 'Third Floor', type: 'F', alert: false, faults: false, sprinkler: false },
    { id: 8, name: 'Fourth Floor', type: 'F', alert: false, faults: false, sprinkler: false },
    { id: 9, name: 'Fifth Floor', type: 'F', alert: true, faults: true, sprinkler: true },
    { id: 10, name: 'Sixth Floor', type: 'F', alert: true, faults: true, sprinkler: false },
    { id: 11, name: 'Seventh Floor', type: 'F', alert: true, faults: false, sprinkler: false },
    { id: 12, name: 'Terrace', type: 'T', alert: false, faults: false, sprinkler: false },
  ].slice().reverse(); // List of objects with fields

  selectedItemIndex: number | null = null; // To track the selected item

  basementItems = this.items.filter(item => item.type === 'B');
  otherItems = this.items.filter(item => item.type !== 'B');

  constructor() { }
  ngOnInit(): void {
    this.selectedItemIndex = this.items[0].id;
  }

  onItemClick(id: number): void {
    this.selectedItemIndex = id; // Save the clicked index
//    console.log('Selected Item:', this.items[index]); // Raise event/log the selected item
    // Emit the event with the clicked item
    const clickedItem = this.items.find(floor => floor.id === id);
    this.itemClicked.emit(clickedItem);
  }

  getIconClass(active: boolean): string {
    return active ? 'active-icon' : 'small-icon';
  }
}
