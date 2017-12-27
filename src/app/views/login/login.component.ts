import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ApplicationState } from '@store/application.state';
import { Store } from '@ngrx/store';
import { SubmitFormAction } from '@store/actions/login.page.action';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  form: FormGroup;
  $isSigninIn: Observable<boolean>;
  $errorMessage: Observable<string>;

  constructor(
    private formBuilder: FormBuilder,
    private store: Store<ApplicationState>
  ) {
    this.form = formBuilder.group({
      email: ['dylanvansteen@gmail.com', [Validators.email]],
      password: ['Welkom01', [Validators.min(6)]]
    });

    this.$isSigninIn = this.store.select(state => state.loginPage.signinIn);
    this.$errorMessage = this.store.select(state => state.loginPage.errorMessage);
  }

  ngOnInit() {
  }

  submit() {
    if (this.form.valid) {
      this.store.dispatch(new SubmitFormAction(this.form.value));
    }
  }
}
