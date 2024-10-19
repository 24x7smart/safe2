import { ChangeDetectorRef, Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute } from '@angular/router';
import { Block, Building, Floor } from 'app/models/building.model';
import { Device, Motor, Tank, Waterline } from 'app/models/device.model';
import { DeviceService } from 'app/services/properties/device.service';
import { PickListService } from 'app/services/utilities/pick-list.service';

@Component({
  selector: 'app-device-edit',
  templateUrl: './device-edit.component.html',
  styleUrls: ['./device-edit.component.css']
})
export class DeviceEditComponent implements OnInit {

  @ViewChild('dialogEditTank') dialogEditTank!: TemplateRef<any>;  // Capture the template reference

  selectedTabIndex = -1; // Tracks the active tab (0 = Tab 1, 1 = Tab 2, 2 = Tab 3)
  selectedItemIndex = -1;
  device_id = 0;
  device: Device;
  itemTypeClicked: string = 'Z';

  dialogRef: any;
  contactColumns: string[] = ['name', 'role', 'phone1', 'edit'];

  editTank: number = -1;
  editMotor: number = -1;
  editLine: number = -1;

  tankForm: FormGroup;

  constructor(
    private route: ActivatedRoute,
    private deviceService: DeviceService,
    private cdr: ChangeDetectorRef,
    public dialog: MatDialog,
    private picklistService: PickListService,
    private fb: FormBuilder
  ) { 
    this.tankForm = this.fb.group({
      tank_type: ['', Validators.required],
      capacity: ['', Validators.required],
      height: ['', Validators.required]
    });    
  }

  ngOnInit(): void {
    this.picklistService.getPicklistValue("tank_type", "U").subscribe(data => {
      console.log('picklist loaded');
    })
    // Access the route parameter 'id'
    this.route.params.subscribe(params => {
      this.device_id = params['id']; 
      console.log(this.device_id); 

      this.deviceService.getDeviceById(this.device_id).subscribe(
        (data: Device) => {
          this.device = data;
          console.log(this.device);
        },
        (error) => {
          console.error('Error loading device:', error);  // Handle error
        }
      );
    });
  }

  onTabClick(data: any) {
      this.selectedTabIndex = data.index;
      this.itemTypeClicked = 'Z';
      this.cdr.detectChanges();
  }

  onItemClick(id: number) {
    this.itemTypeClicked = 'F';
    this.selectedItemIndex = id;
    this.cdr.detectChanges();
  }

  onWaterClick() {
    this.itemTypeClicked = 'W';
    this.cdr.detectChanges();
  }

  onZoneClick() {
    this.itemTypeClicked = 'Z';
    this.cdr.detectChanges();
  }

  getFloorById(id: number): Floor {
    return this.device?.building?.blocks[this.selectedTabIndex - 1]?.floors.find(element => element.floor_id === id);
  }

  get imageUrl(): string {
    return this.selectedItemIndex ? `assets/img/plans/1/${this.selectedItemIndex}.png` : '';
  }  

  onClose(): void {
    // Close the dialog
    if (this.dialogRef) {
      this.dialogRef.close();
    }
  } 

  tankClick(index: number) {
    if ( index === -1 ) {
      const tank = <Tank> {tank_id: 0, device_id: this.device.device_id, tank_type: '', capacity: 0, fullness: 0, height: 0, level: 0, loc: ''};
      this.device.tanks.push(tank)
      index = this.device.tanks.length - 1;  
    }
    this.editTank = index;
    this.initializeTankForm();

    this.dialogRef = this.dialog.open(this.dialogEditTank, {
      width: '400px',
      // You can pass data or configure options here
    });

    // Handle after the dialog closes
    this.dialogRef.afterClosed().subscribe(result => {
      console.log('Dialog closed', result);
    });    
  }

  private initializeTankForm(): void {
    // Assuming editTank is already populated with the tank data
    if (this.editTank !== -1) {
      this.tankForm.patchValue({
        tank_type: this.device.tanks[this.editTank].tank_type,
        capacity: this.device.tanks[this.editTank].capacity,
        height: this.device.tanks[this.editTank].height
      });
    }
  }

  onTankSubmit() {
    if (this.tankForm.valid) {
      const updatedTank = {
        ...this.device.tanks[this.editTank], // Merge with the original object
        ...this.tankForm.value // Get updated values from the form
      };
      console.log('Updated Tank:', updatedTank);
      // Call your service to update the tank object in the backend
      this.device.tanks[this.editTank] = { ...updatedTank };
      this.cdr.detectChanges();
      this.onClose();

      console.log('Edit Tank', this.editTank);
      console.log(this.device);
    }    
  }

  motorClick(motor: Motor) {
    alert('ok');
    alert(motor);
  }
  
  wlineClick(wline: Waterline) {
    alert('ok');
    alert(wline);
  }  
}
