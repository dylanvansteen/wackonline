import { Component, OnInit } from '@angular/core';
import { LocationService } from '@services/location/location.service';
import { FormField } from 'app/tools/dynamic-form/contracts';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
})
export class HomeComponent implements OnInit {

  private formFields: FormField[];

  constructor(
    private locationService: LocationService
  ) {
  }

  ngOnInit() {
    this.formFields = this.locationService.getForm();
  }

}
