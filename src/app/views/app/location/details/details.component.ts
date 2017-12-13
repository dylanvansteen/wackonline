import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { LocationService } from '@services/location/location.service';
import { LocationType } from '@services/location/location.contracts';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss'],
})
export class DetailsComponent implements OnInit {
  public form: FormGroup;
  // locationType = LocationType;
  locationTypes = new Array<{ value: string, display: string }>();
  constructor(
    public dialogRef: MatDialogRef<DetailsComponent>,
    public formBuilder: FormBuilder,
    public locationService: LocationService,
    @Inject(MAT_DIALOG_DATA) public data: any) {
    for (const key of Object.keys(LocationType)) {
      this.locationTypes.push({ value: LocationType[key], display: LocationType[key] });
    }
  }

  ngOnInit() {
    this.form = this.formBuilder.group({
      name: ['', [Validators.required, Validators.maxLength(50)]],
      number: ['', [Validators.required, Validators.maxLength(25)]],
      type: ['', [Validators.required]],
      GLN: [''],
      telephone: ['', [Validators.maxLength(30)]],
      emailAddress: ['', [Validators.maxLength(200)]],
      addressLine: ['', [Validators.maxLength(100)]],
      postalCode: ['', [Validators.maxLength(15)]],
      city: ['', [Validators.maxLength(30)]],
      country: ['', [Validators.maxLength(50)]],
    });
  }


  submit() {
    if (this.form.valid) {
      this.locationService.create(this.form.value).subscribe(res => {
        this.dialogRef.close(res);
      });
    }
  }

  cancel() {
    this.dialogRef.close();
  }

}
