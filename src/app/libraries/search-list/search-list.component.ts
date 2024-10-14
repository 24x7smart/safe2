import { SelectionModel } from '@angular/cdk/collections';
import { Component, Input, Output, EventEmitter, OnInit, ChangeDetectorRef, ViewChild } from '@angular/core';
import { MatTable } from '@angular/material/table';

@Component({
  selector: 'app-search-list',
  templateUrl: './search-list.component.html',
  styleUrls: ['./search-list.component.scss']
})
export class SearchListComponent implements OnInit {
  @Input() searchConfig: any;
  @Input() listData: any[] = [];
  @Output() searchCallback = new EventEmitter<any>();
  @Output() addCallback = new EventEmitter<void>();
  @Output() exportCallback = new EventEmitter<any[]>();
  @Output() fetchSelectData = new EventEmitter<string>();
  @Output() rowActionCallback = new EventEmitter<{ id: any, code: string }>();
  @Output() selectionChange = new EventEmitter<any[]>();

  @ViewChild(MatTable) listTable: MatTable<any>;

  searchCriteria: any = {};
  sortedData: any[] = [];
  sortOrder: { [key: string]: 'asc' | 'desc' | '' } = {};
  displayedColumns: string[] = [];

  selectedRow: any = null;
  selection = new SelectionModel<any>(true, []); // For checkboxes
  
  constructor(private cdr: ChangeDetectorRef) { }

  ngOnInit() {
    this.sortedData = [...this.listData];
    
    this.initializeSortOrder();
    this.initializeDisplayedColumns();  // Initialize displayedColumns here
  }

  initializeSortOrder() {
    this.searchConfig.list.fields.forEach((field: any) => {
      if (field.sortable) {
        this.sortOrder[field.field] = '';
      }
    });
  }

  initializeDisplayedColumns() {
    if (this.searchConfig.list.select) {
      this.displayedColumns.push('select'); // Add the selection column
    }
    this.displayedColumns = this.displayedColumns.concat(this.searchConfig.list.fields.map((field: any) => field.field));
    this.displayedColumns.push('actions'); // Add the actions column
}

  setListData(data: any[]) {
    this.listData = data;
    this.sortedData = [...this.listData];
    this.listTable.renderRows();
  }

  onSearch() {
    this.searchCallback.emit(this.searchCriteria);
  }

  onReset() {
    this.searchCriteria = {};
  }

  onSort(field: string, dtype: string) {
    const order = this.sortOrder[field] === 'asc' ? 'desc' : 'asc';
    this.sortOrder[field] = order;

    this.sortedData.sort((a, b) => {
      if (dtype === 'date') {
        return order === 'asc' 
          ? new Date(a[field]).getTime() - new Date(b[field]).getTime() 
          : new Date(b[field]).getTime() - new Date(a[field]).getTime();
      } else {
        return order === 'asc'
          ? (a[field] > b[field] ? 1 : -1)
          : (a[field] < b[field] ? 1 : -1);
      }
    });
  }

  onAdd() {
    this.addCallback.emit();
  }

  onExport() {
    this.exportCallback.emit(this.listData);
  }

  onRowAction(id: any, code: string) {
    this.rowActionCallback.emit({ id, code });
  }

  fetchDataForSelect(criteria: any) {
    if (criteria.list.type === 'c') {
      this.fetchSelectData.emit(criteria.id);
    }
  }

  // Add a function to handle dynamic condition checking
  evaluateCondition(rowValue: any, condition: string, value: any): boolean {
    switch (condition) {
      case '===': return rowValue === value;
      case '!==': return rowValue !== value;
      case '>': return rowValue > value;
      case '>=': return rowValue >= value;
      case '<': return rowValue < value;
      case '<=': return rowValue <= value;
      default: return false;
    }
  }

    // Function to access nested properties
    getPropertyValue(element: any, field: any) {
      return field.field.split('.').reduce((obj, key) => (obj && obj[key] !== 'undefined') ? obj[key] : null, element);
    }

    onSelectionChange(data) {
      if (this.searchConfig.list.select === 'check') {
        this.selectionChange.emit(this.selection.selected);
      } else if (this.searchConfig.list.select === 'radio') {
        this.selectedRow = data;
        this.selectionChange.emit(data);
      }
    }
  
    /** Method to return selected objects */
    getSelectedObjects(): any[] {
      return this.searchConfig.list.select === 'check' ? this.selection.selected : [this.selectedRow];
    }    
}
