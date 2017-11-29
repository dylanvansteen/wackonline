import { Action } from '@ngrx/store';
import { LoginModel } from '@services/authorization/authorization.contracts';

export enum actionTypes {
    submit = '[Login page] submit',
    error = '[Login page] error',
    successfull = '[Login page] successfull'
}

export class SubmitFormAction implements Action {
    type = actionTypes.submit;
    constructor(public payload: LoginModel) {
    }
}

export class OnErrorFormAction implements Action {
    type = actionTypes.error;
    constructor(public payload: string) {
    }
}

export class SubmitFormSuccessfullAction implements Action {
    type = actionTypes.successfull;
    constructor() {
    }
}

