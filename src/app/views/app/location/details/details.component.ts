import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { LocationService } from '@services/location/location.service';
import { LocationType, LocationModel } from '@services/location/location.contracts';

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
    const data: LocationModel = this.data || {};
    this.form = this.formBuilder.group({
      _id: [data._id],
      name: [data.name, [Validators.required, Validators.maxLength(50)]],
      number: [data.number, [Validators.required, Validators.maxLength(25)]],
      type: [data.type, [Validators.required]],
      GLN: [data.GLN],
      telephone: [data.telephone, [Validators.maxLength(30)]],
      emailaddress: [data.emailaddress, [Validators.maxLength(200)]],
      addressLine: [data.addressLine, [Validators.maxLength(100)]],
      postalCode: [data.postalCode, [Validators.maxLength(15)]],
      city: [data.city, [Validators.maxLength(30)]],
      country: [data.country, [Validators.maxLength(50)]],
    });
  }


  submit() {
    if (this.form.valid) {
      const model: LocationModel = this.form.value;
      if (!model._id) {
        this.locationService.create(model).subscribe(res => {
          this.dialogRef.close(res);
        });
      } else {
        this.locationService.update(model).subscribe(res => {
          this.dialogRef.close(res);
        });
      }
    }
  }

  cancel() {
    this.dialogRef.close();
  }

}
