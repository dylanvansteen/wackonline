import { Action } from '@ngrx/store';
import { LocationModel, LocationOverviewModelResponse } from '@services/location/location.contracts';
import { PageEvent } from '@angular/material';
import { ItemDefinitionOverviewModelResponse } from '@services/itemdefinition/itemdefinition.contracts';

export enum actionTypes {
    initialLoad = '[Itemdefinition overview page] initial load',
    initialLoadSuccessfull = '[Itemdefinition overview page] initial load successfull',
    onPageChange = '[Itemdefinition overview page] on page change',
    initialLoadOnError = '[Itemdefinition overview page] initial load on error',
    CreatedItemDefinitionSuccessfull = '[Itemdefinition overview page] Created location successfull',
    UpdatedItemDefinitionSuccessfull = '[Itemdefinition overview page] updated location successfull',
}

export class InitialLoadAction implements Action {
    type = actionTypes.initialLoad;
    constructor() {
    }
}

export class LoadSuccessfullAction implements Action {
    type = actionTypes.initialLoadSuccessfull;

    constructor(public payload: ItemDefinitionOverviewModelResponse) {
    }
}

export class OnPageChangeAction implements Action {
    type = actionTypes.onPageChange;

    constructor(public payload: PageEvent) {
    }
}

export class CreatedLocationSuccessfullAction implements Action {
    type = actionTypes.CreatedItemDefinitionSuccessfull;

    constructor(public payload: LocationModel) {
    }
}

export class UpdatedLocationSuccessfullAction implements Action {
    type = actionTypes.UpdatedItemDefinitionSuccessfull;

    constructor(public payload: LocationModel) {
    }
}

export class OnErrorAction implements Action {
    type = actionTypes.initialLoadOnError;
    constructor(public payload: string) {
    }
}


