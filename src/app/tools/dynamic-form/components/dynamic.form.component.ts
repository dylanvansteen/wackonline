import { Component, Input } from '@angular/core';
import { FormField } from 'app/tools/dynamic-form/contracts';
import { FormGroup } from '@angular/forms';

@Component({
    selector: 'app-dynamic-form',
    templateUrl: './dynamic.form.component.html',
    exportAs: 'dynamicForm'
})
export class DynamicFormComponent {
    @Input() fields: FormField[];

    form = new FormGroup({});
}
