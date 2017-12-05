import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss'],
})
export class DetailsComponent implements OnInit {
  public form: FormGroup;

  constructor(
    public dialogRef: MatDialogRef<DetailsComponent>,
    public formBuilder: FormBuilder,
    @Inject(MAT_DIALOG_DATA) public data: any) { }

  ngOnInit() {
    this.form = this.formBuilder.group({
      name: ['', [Validators.required, Validators.maxLength(50)]],
      number: ['', [Validators.required, Validators.maxLength(25)]],
      type: ['', [Validators.required]],
      GLN: [''],
      telephone: ['', [Validators.maxLength(30)]],
      emailAddress: ['', [Validators.maxLength(200), Validators.email]],
      addressLine: ['', [Validators.maxLength(100)]],
      postalCode: ['', [Validators.maxLength(15)]],
      city: ['', [Validators.maxLength(30)]],
      country: ['', [Validators.maxLength(50)]],
    });
  }


  submit() {

  }

  cancel() {
    this.dialogRef.close();
  }

}
