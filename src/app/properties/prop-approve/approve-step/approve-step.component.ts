import { HttpClient } from '@angular/common/http';
import { ChangeDetectorRef, Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-approve-step',
  templateUrl: './approve-step.component.html',
  styleUrls: ['./approve-step.component.css']
})
export class ApproveStepComponent implements OnInit {

  @Input() step_id: number = 0; // If you're passing block data for editing

  templateContent: string = '';

  constructor(private http: HttpClient,
    private cdr: ChangeDetectorRef
  ) { }

  ngOnInit(): void {
    this.setContent(this.step_id);
  }

  setContent(step_id: number) {
    this.step_id = step_id;
    this.http.get('assets/html/workflow/' + this.step_id + '.html', { responseType: 'text' })
      .subscribe(data => { 
        this.templateContent = data;
        this.cdr.detectChanges();
      });
  }
}
