import {
    actionTypes,
    LoadSuccessfullAction,
    OnPageChangeAction,
    UpdatedLocationSuccessfullAction,
    CreatedLocationSuccessfullAction
} from '@store/actions/location.overview.action';
import { Action } from '@ngrx/store';
import { LocationOverviewPageState } from '@store/states/location.overview.page.state';


export function locationOverviewPageReducer(state: LocationOverviewPageState, action: any): LocationOverviewPageState {
    switch (action.type) {
        case actionTypes.initialLoad:
            return Object.assign({}, state, { isLoading: true, filter: { $skip: 0, $limit: 15 } });
        case actionTypes.initialLoadSuccessfull:
            return handleLoadCompleted(state, action);
        case actionTypes.onPageChange:
            return handleOnPageChange(state, action);
        case actionTypes.CreatedLocationSuccessfull:
            return handleCreatedLocation(state, action);
        case actionTypes.UpdatedLocationSuccessfull:
            return handleUpdatedLocation(state, action);
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
    copyState.filter =
        Object.assign({}, copyState.filter, {
            $limit: action.payload.pageSize,
            $skip: (action.payload.pageSize * action.payload.pageIndex)
        });

    return copyState;
}

function handleCreatedLocation(state: LocationOverviewPageState, action: CreatedLocationSuccessfullAction): LocationOverviewPageState {
    const copyState: LocationOverviewPageState = Object.assign({}, state, { locations: [action.payload, ...state.locations] });

    return copyState;
}

function handleUpdatedLocation(state: LocationOverviewPageState, action: UpdatedLocationSuccessfullAction): LocationOverviewPageState {
    return state;
}
