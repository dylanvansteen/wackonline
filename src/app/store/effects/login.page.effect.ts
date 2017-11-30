import { AuthorizationService } from '@services/authorization/authorization.service';
import { Effect, Actions } from '@ngrx/effects';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { actionTypes, SubmitFormAction, OnErrorFormAction, SubmitFormSuccessfullAction } from '@store/actions/login.page.action';
import { Action } from '@ngrx/store';

@Injectable()
export class LoginPageEffectService {

    @Effect()
    $signIn: Observable<Action> =
        this.$actions.ofType<SubmitFormAction>(actionTypes.submit)
            .switchMap(action => this.authorizationService.login(action.payload)
                .map(data => {
                    localStorage.setItem('accessToken', data.accessToken);
                    this.router.navigate(['/app']);
                    return new SubmitFormSuccessfullAction();
                })
                .catch(err => Observable.of(new OnErrorFormAction('failed to login')))
            );

    constructor(
        private $actions: Actions,
        private router: Router,
        private authorizationService: AuthorizationService
    ) {

    }
}
