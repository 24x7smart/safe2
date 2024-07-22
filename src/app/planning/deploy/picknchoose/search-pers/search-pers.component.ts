import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-search-pers',
  templateUrl: './search-pers.component.html',
  styleUrls: ['./search-pers.component.css']
})
export class SearchPersComponent implements OnInit {

  constructor(private fb: FormBuilder) { 
    this.searchForm = this.fb.group({
      name: [''],
      number: [''],
      rank: [''],
      unit: ['']
    });    
  }

  searchForm: FormGroup;

  @Input() rank: number;
  units: string[];
  ranks: string[];
  searchResult: string[];
  
  ngOnInit(): void {
  }

  onSubmit(): void {
    console.log(this.searchForm.value);
  }

}
