import { Action } from '@ngrx/store';
import { LoginPageState } from '@store/states/login.page.state';
import { actionTypes, OnErrorFormAction } from '@store/actions/login.page.action';

export function loginPageReducer(state: LoginPageState, action: any): LoginPageState {
    switch (action.type) {
        case actionTypes.submit:
            return Object.assign({}, state, { signinIn: true });
        case actionTypes.successfull:
            return Object.assign({}, state, { signinIn: false });
        case actionTypes.error:
            return handleError(state, action);
        default:
            return state;
    }
}

function handleError(state: LoginPageState, action: OnErrorFormAction) {
    return Object.assign({}, state, { errorMessage: action.payload, signinIn: false });
}


