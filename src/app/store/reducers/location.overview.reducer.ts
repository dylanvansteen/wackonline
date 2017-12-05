import { actionTypes, LoadSuccessfullAction, OnPageChangeAction } from '@store/actions/location.overview.action';
import { Action } from '@ngrx/store';
import { LocationOverviewPageState } from '@store/states/location.overview.page.state';


export function locationOverviewPageReducer(state: LocationOverviewPageState, action: any): LocationOverviewPageState {
    switch (action.type) {
        case actionTypes.initialLoad:
            return Object.assign({}, state, { isLoading: true });
        case actionTypes.initialLoadSuccessfull:
            return handleLoadCompleted(state, action);
        case actionTypes.onPageChange:
            return handleOnPageChange(state, action);
        default:
            return state;
    }
}


function handleLoadCompleted(state: LocationOverviewPageState, action: LoadSuccessfullAction): LocationOverviewPageState {
    const copyState: LocationOverviewPageState = Object.assign({}, state);
    copyState.errorMessage = null;
    copyState.isLoading = false;
    copyState.locations = action.payload.data;
    copyState.count = action.payload.total;

    return copyState;
}


function handleOnPageChange(state: LocationOverviewPageState, action: OnPageChangeAction): LocationOverviewPageState {
    const copyState: LocationOverviewPageState = Object.assign({}, state);
    // copyState.filter.$limit = action.payload.pageSize;
    // copyState.filter.$skip = (action.payload.pageSize * action.payload.pageIndex);

    copyState.filter =
        Object.assign({}, copyState.filter, {
            $limit: action.payload.pageSize,
            $skip: (action.payload.pageSize * action.payload.pageIndex)
        });

    return copyState;
}
