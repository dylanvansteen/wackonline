import { Component } from '@angular/core';
import { AuthorizationService } from '@services/authorization/authorization.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',

})
export class AppComponent {
  title = 'app';
  /**
   *
   */
  constructor(
    private test: AuthorizationService
  ) {
    // this.test.login()
  }
}
