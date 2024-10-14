import { ChangeDetectorRef, Component, Input, OnInit } from '@angular/core';
import { DataProcessor } from '../../utilities/data-processor.js';

@Component({
  selector: 'app-summary-cards',
  templateUrl: './summary-cards.component.html',
  styleUrls: ['./summary-cards.component.css']
})
export class SummaryCardsComponent implements OnInit {

  @Input() config: {config: {class: string}, cards: any[]};
  @Input() data: any[] = [];

  results: any[] = [];

  constructor(private cdr: ChangeDetectorRef) {}

  ngOnInit(): void {
    this.processConfig();
    //console.log(this.config);
  }

  setData(data: any[]) {

    this.data = data;
    this.processConfig();

    this.cdr.detectChanges();

  }

  processConfig() {

    this.results = this.config.cards.map((item) => {
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
