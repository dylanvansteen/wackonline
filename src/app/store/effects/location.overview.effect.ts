import { Effect, Actions } from '@ngrx/effects';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { Action } from '@ngrx/store';
import { LocationService } from '@services/location/location.service';
import { actionTypes, LoadSuccessfullAction, InitialLoadAction, OnErrorAction } from '@store/actions/location.overview.action';
import { Store } from '@ngrx/store';
import { LocationOverviewPageState } from '@store/states/location.overview.page.state';
import { ApplicationState } from '@store/application.state';

@Injectable()
export class LocationOverviewPageEffectService {

    @Effect()
    $signIn: Observable<Action> =
        this.$actions.ofType(...[actionTypes.initialLoad, actionTypes.onPageChange])
            .withLatestFrom(this.$store)
            .switchMap(([action, state]) => this.locationService.get(state.locationOverviewPage.filter)
                .map(data => {
                    return new LoadSuccessfullAction(data);
                })
                .catch(err => Observable.of(new OnErrorAction('failed to login')))
            );

    constructor(
        private $actions: Actions,
        private router: Router,
        private locationService: LocationService,
        private $store: Store<ApplicationState>
    ) {
    }
}
