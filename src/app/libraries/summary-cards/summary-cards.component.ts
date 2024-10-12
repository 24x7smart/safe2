import { Component, Input, OnInit } from '@angular/core';
import { DataProcessor } from '../../utilities/data-processor.js';

@Component({
  selector: 'app-summary-cards',
  templateUrl: './summary-cards.component.html',
  styleUrls: ['./summary-cards.component.css']
})
export class SummaryCardsComponent implements OnInit {

  @Input() config: any[] = [];
  @Input() data: any[] = [];

  results: any[] = [];

  constructor() {}

  ngOnInit(): void {
    this.processConfig();
  }

  processConfig() {
    this.results = this.config.map((item) => {
      const result = DataProcessor.processData(
        this.data,
        item.function,
        item.field,
        item.check_field,
        item.check_value
      );
      return { ...item, result };
    });
  }
}
