import { Component, OnInit, Inject } from '@angular/core';
import { FormField } from 'app/tools/dynamic-form/contracts';
import { FormControl } from '@angular/forms/src/model';

@Component({
    selector: 'app-textbox',
    template: `
    <mat-form-field fxFlex="100">
        <input [formControl]="control" matInput [placeholder]="field.placeholder">
    </mat-form-field>

    `,
    exportAs: 'textbox'
})
export class TextBoxComponent implements OnInit {
    field: FormField;
    control: FormControl;

    constructor(
    ) {
    }

    ngOnInit() {
        console.log('textbox:', [this.field, this.control]);
    }
}
