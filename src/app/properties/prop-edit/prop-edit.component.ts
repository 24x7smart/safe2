import { ChangeDetectorRef, Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Building, Block, Floor } from 'app/models/building.model';
import { BuildingService } from 'app/services/properties/building.service';
import { MatDialog } from '@angular/material/dialog';
import { BlockInfoComponent } from './block-info/block-info.component';

@Component({
  selector: 'app-prop-edit',
  templateUrl: './prop-edit.component.html',
  styleUrls: ['./prop-edit.component.css']
})
export class PropEditComponent implements OnInit {

  @ViewChild('dialogEditBlock') dialogEditBlock!: TemplateRef<any>;  // Capture the template reference
  @ViewChild(BlockInfoComponent, { static: false }) blockInfoComponent: BlockInfoComponent;

  selectedTabIndex = 1; // Tracks the active tab (0 = Tab 1, 1 = Tab 2, 2 = Tab 3)
  selectedItemIndex = -1;
  prop_id = 0;
  property: Building;

  dialogRef: any;
  contactColumns: string[] = ['name', 'role', 'phone1', 'edit'];

  constructor(
    private route: ActivatedRoute,
    private buildingService: BuildingService,
    private cdr: ChangeDetectorRef,
    public dialog: MatDialog
  ) { }

  ngOnInit(): void {
    // Access the route parameter 'id'
    this.route.params.subscribe(params => {
      this.prop_id = params['id']; 
      console.log(this.prop_id); 

      this.buildingService.getBuildingById(this.prop_id).subscribe(
        (data: Building) => {
          this.property = data;
          console.log(this.property);
        },
        (error) => {
          console.error('Error loading building:', error);  // Handle error
        }
      );
    });
  }

  onTabClick(data: any) {
    console.log(data);
    if ( data.index > 0 ) {
      this.selectedTabIndex = data.index;
      this.cdr.detectChanges();
    } else {
      this.newBlock(this.dialogEditBlock);
      this.selectedTabIndex = 1;
    }
  }

  onItemClick(id: number) {
    this.selectedItemIndex = id;
  }

  getFloorById(id: number): Floor {
    return this.property?.blocks[this.selectedTabIndex - 1]?.floors.find(element => element.floor_id === id);
  }

  get imageUrl(): string {
    return this.selectedItemIndex ? `assets/img/plans/1/${this.selectedItemIndex}.png` : '';
  }  

  onNewItemClick() {
  }

  newBlock(dialogTemplate: TemplateRef<any>): void {
    // Open the dialog using the template defined in the component's HTML
    this.dialogRef = this.dialog.open(dialogTemplate, {
      width: '400px',
      // You can pass data or configure options here
    });

    // Handle after the dialog closes
    this.dialogRef.afterClosed().subscribe(result => {
      console.log('Dialog closed', result);
    });
  }

  editBlock(block: Block): void {
    alert('in edit');
    // Open the dialog using the template defined in the component's HTML
    this.blockInfoComponent.blockData = block;
    this.dialogRef = this.dialog.open(this.dialogEditBlock, {
      width: '400px',
      // You can pass data or configure options here
    });

    // Handle after the dialog closes
    this.dialogRef.afterClosed().subscribe(result => {
      console.log('Dialog closed', result);
    });
  }
  
  onSave(): void {
    // Perform the save logic
    const block = this.blockInfoComponent.BlockInfo;
    console.log('Save action triggered', block);
    alert(this.blockInfoComponent.EditMode);
    if ( !this.blockInfoComponent.EditMode )
    {
      this.property.blocks.push(block);
    }

    // Optionally close the dialog after save
    if (this.dialogRef) {
      this.dialogRef.close({ saved: true });
    }
  }

  onClose(): void {
    // Close the dialog
    if (this.dialogRef) {
      this.dialogRef.close();
    }
  } 

  editBuilding() {

  }

  editContact(id: number) {
    alert(id);
  }
}
