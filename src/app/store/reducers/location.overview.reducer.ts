import { actionTypes, LoadSuccessfullAction } from '@store/actions/location.overview.action';
import { Action } from '@ngrx/store';
import { LocationOverviewPageState } from '@store/states/location.overview.page.state';


export function locationOverviewPageReducer(state: LocationOverviewPageState, action: any): LocationOverviewPageState {
    switch (action.type) {
        case actionTypes.initialLoad:
            return Object.assign({}, state, { isLoading: true });
        case actionTypes.initialLoadSuccessfull:
            return handleLoadCompleted(state, action);
        default:
            return state;
    }
}


function handleLoadCompleted(state: LocationOverviewPageState, action: LoadSuccessfullAction): LocationOverviewPageState {
    const copyState: LocationOverviewPageState = Object.assign({}, state);
    copyState.errorMessage = null;
    copyState.isLoading = false;
    copyState.locations = action.payload.data;

    return copyState;
}

