import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { MaterialModule } from 'app/material.module';
import { DynamicFormComponent } from './components/dynamic.form.component';
import { FormContentComponent } from './components/form.content.component';
import { PortalModule } from '@angular/cdk/portal';
import { TextBoxComponent } from './components/fields/textbox.component';



@NgModule({
    imports: [
        ReactiveFormsModule,
        CommonModule,
        MaterialModule,
        PortalModule
    ],
    providers: [
    ],
    declarations: [
        DynamicFormComponent,
        FormContentComponent,
        TextBoxComponent
    ],
    entryComponents: [
        TextBoxComponent
    ],
    exports: [
        DynamicFormComponent
    ]
})
export class DynamicFormModule {

}
