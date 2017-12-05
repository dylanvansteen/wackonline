import { Action } from '@ngrx/store';
import { LocationModel, LocationOverviewModelResponse } from '@services/location/location.contracts';
import { PageEvent } from '@angular/material';

export enum actionTypes {
    initialLoad = '[Location overview page] initial load',
    initialLoadSuccessfull = '[Location overview page] initial load successfull',
    onPageChange = '[Location overview page] on page change',
    initialLoadOnError = '[Location overview page] initial load on error'
}

export class InitialLoadAction implements Action {
    type = actionTypes.initialLoad;
    constructor() {
    }
}

export class LoadSuccessfullAction implements Action {
    type = actionTypes.initialLoadSuccessfull;

    constructor(public payload: LocationOverviewModelResponse) {
    }
}

export class OnPageChangeAction implements Action {
    type = actionTypes.onPageChange;

    constructor(public payload: PageEvent) {
    }
}


export class OnErrorAction implements Action {
    type = actionTypes.initialLoadOnError;
    constructor(public payload: string) {
    }
}


