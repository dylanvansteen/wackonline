import { ButtonSavingIndicatorDirective } from './button.saving.indicator.directive';
import { NgModule } from '@angular/core';
import { LoaderComponent } from 'app/tools/extensions/loader.component';
import { MatSpinner, MatProgressSpinnerModule } from '@angular/material';

@NgModule({
    imports: [
        MatProgressSpinnerModule
    ],
    declarations: [
        ButtonSavingIndicatorDirective,
        LoaderComponent
    ],
    entryComponents: [
        LoaderComponent
    ],
    exports: [
        ButtonSavingIndicatorDirective
    ],
})
export class ExtenstionsModule {

}
