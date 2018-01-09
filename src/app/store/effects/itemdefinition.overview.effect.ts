import { Effect, Actions } from '@ngrx/effects';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { Action } from '@ngrx/store';
import { LocationService } from '@services/location/location.service';
import { Store } from '@ngrx/store';
import { ApplicationState } from '@store/application.state';
import { actionTypes, LoadSuccessfullAction, OnErrorAction } from '@store/actions/itemdefinition.overview.action';
import { ItemDefinitionService } from '@services/itemdefinition/itemdefinition.service';
import { LocationOverviewModelResponse } from '@services/location/location.contracts';
import { ItemDefinitionOverviewModelResponse } from '@services/itemdefinition/itemdefinition.contracts';

@Injectable()
export class ItemDefinitionOverviewPageEffectService {

    @Effect()
    $signIn: Observable<Action> =
        this.$actions.ofType(...[actionTypes.initialLoad, actionTypes.onPageChange])
            .withLatestFrom(this.$store)
            .switchMap(([action, state]) =>
                this.itemDefinitionService.get<ItemDefinitionOverviewModelResponse>(state.itemDefinitionOverviewPage.filter)
                    .map(data => {
                        return new LoadSuccessfullAction(data);
                    })
                    .catch(err => Observable.of(new OnErrorAction('failed to fetch itemdefinition')))
            );

    constructor(
        private $actions: Actions,
        private router: Router,
        private itemDefinitionService: ItemDefinitionService,
        private $store: Store<ApplicationState>
    ) {
    }
}
