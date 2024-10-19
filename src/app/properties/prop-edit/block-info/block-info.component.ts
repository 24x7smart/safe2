import { Component, OnInit, Input } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Block } from 'app/models/building.model';

@Component({
  selector: 'app-block-info',
  templateUrl: './block-info.component.html',
  styleUrls: ['./block-info.component.css']
})
export class BlockInfoComponent implements OnInit {
  blockForm: FormGroup;
  isEditMode = false;
  blockId: number;

  @Input() blockData: Block; // If you're passing block data for editing

  constructor(
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private router: Router
  ) {
    this.blockForm = this.fb.group({
      name: ['', Validators.required],
      height: ['', Validators.required],
      occu: ['', Validators.required]
    });
  }

  ngOnInit(): void {
    if (!this.blockData) {
      this.blockData = {
        block_id: 0,
        name: '',
        height: 0,
        occu: '',
        floors: []
      };
    } else {
      this.isEditMode = true;
      this.blockId = this.blockData.block_id;
    }

    // If blockData is passed as Input, pre-fill form for editing
    if (this.blockData) {
      this.blockForm.patchValue(this.blockData);
    }
  }

  onSubmit(): void {
    if (this.blockForm.valid) {
      const block = this.blockForm.value;
/*      
      if (this.isEditMode) {
        // Call the update method
        this.blockService.updateBlock(this.blockId, block).subscribe(() => {
          this.router.navigate(['/blocks']);
        });
      } else {
        // Call the create method
        this.blockService.addBlock(block).subscribe(() => {
          this.router.navigate(['/blocks']);
        });
      }
*/
    }
  }

  get BlockInfo(): Block {
    // Copy only the properties that exist in targetBlock
    Object.keys(this.blockForm.value).forEach(key => {
      if (key in this.blockData) {
        (this.blockData as any)[key] = (this.blockForm.value as any)[key];
      }
    });
    return this.blockData;
  }

  get EditMode(): boolean {
    return this.isEditMode;
  }
}
