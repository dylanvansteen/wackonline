import { Component } from '@angular/core';


@Component({
    selector: 'app-loader',
    template: `<div class="spinner">
        <mat-spinner  [strokeWidth]="3" [diameter]="35"></mat-spinner>
    </div>`
})
export class LoaderComponent {

}
