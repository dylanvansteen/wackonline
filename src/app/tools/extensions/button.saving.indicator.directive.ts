import { LoaderComponent } from './loader.component';
import {
    Directive,
    TemplateRef,
    Input,
    ViewContainerRef,
    ComponentFactoryResolver,
    ComponentFactory
} from '@angular/core';

@Directive({
    selector: '[appSaving], [saving]',

})
export class ButtonSavingIndicatorDirective {
    loadingFactory: ComponentFactory<LoaderComponent>;
    @Input('saving') set saving(value: boolean) {
        this.viewContainerRef.clear();
        if (value) {
            this.viewContainerRef.createComponent(this.loadingFactory);
        } else {
            this.viewContainerRef.createEmbeddedView(this.templateRef);
        }
    }

    constructor(
        private templateRef: TemplateRef<any>,
        private viewContainerRef: ViewContainerRef,
        private componentFactoryResolver: ComponentFactoryResolver
    ) {
        this.loadingFactory = this.componentFactoryResolver.resolveComponentFactory(LoaderComponent);
    }

}
