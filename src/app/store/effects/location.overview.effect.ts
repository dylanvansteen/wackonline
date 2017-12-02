import { Effect, Actions } from '@ngrx/effects';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { Action } from '@ngrx/store';
import { LocationService } from '@services/location/location.service';
import { actionTypes, LoadSuccessfullAction, InitialLoadAction, OnErrorAction } from '@store/actions/location.overview.action';

@Injectable()
export class LocationOverviewPageEffectService {

    @Effect()
    $signIn: Observable<Action> =
        this.$actions.ofType<InitialLoadAction>(actionTypes.initialLoad)
            .switchMap(action => this.locationService.get()
                .map(data => {
                    return new LoadSuccessfullAction(data);
                })
                .catch(err => Observable.of(new OnErrorAction('failed to login')))
            );

    constructor(
        private $actions: Actions,
        private router: Router,
        private locationService: LocationService
    ) {
    }
}
