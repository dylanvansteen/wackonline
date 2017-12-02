import { Action } from '@ngrx/store';
import { LocationModel, LocationOverviewModelResponse } from '@services/location/location.contracts';

export enum actionTypes {
    initialLoad = '[Location overview page] initial load',
    initialLoadSuccessfull = '[Location overview page] initial load successfull',
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

export class OnErrorAction implements Action {
    type = actionTypes.initialLoadOnError;
    constructor(public payload: string) {
    }
}


