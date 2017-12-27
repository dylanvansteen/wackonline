import {
    Component,
    Input,
    OnInit,
    ViewContainerRef,
    Injector,
    ComponentFactoryResolver,
    ReflectiveInjector,
    InjectionToken,
    ViewChild
} from '@angular/core';
import {
    FormGroup,
    FormControl
} from '@angular/forms';
import { FormField, InputType } from 'app/tools/dynamic-form/contracts';
import { TextBoxComponent } from 'app/tools/dynamic-form/components/fields/textbox.component';
import { Portal, ComponentPortal, PortalOutlet, PortalInjector } from '@angular/cdk/portal';

@Component({
    selector: 'app-form-content',
    template: `
    <ng-template #input>
    </ng-template>
    `,
    exportAs: 'formContent'
})
export class FormContentComponent implements OnInit {
    @Input() form: FormGroup;
    @Input() field: FormField;
    @ViewChild('input', { read: ViewContainerRef }) input: ViewContainerRef;
    constructor(
        private componentRef: ViewContainerRef,
        private injector: Injector,
        private componentFactoryResolver: ComponentFactoryResolver,
    ) {
    }

    ngOnInit(): void {
        console.log('field', this.field);
        console.log('field', this.form);
        this.generateField();
    }

    generateField() {
        switch (this.field.inputType) {
            case InputType.textbox:
                return this.generateTextBox();
            default:
                return new Error('not implemented');
        }
    }



    generateTextBox() {
        const control = new FormControl();
        this.form.addControl(this.field.field, control);
        const factory = this.componentFactoryResolver.resolveComponentFactory(TextBoxComponent);
        const component = factory.create(this.injector);

        component.instance.field = this.field;
        component.instance.control = control;

        this.input.insert(component.hostView);
    }

    addValidation() {
        throw Error('not implemented yet');
    }
}
