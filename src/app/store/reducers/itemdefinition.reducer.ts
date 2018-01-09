import {
    actionTypes,
    LoadSuccessfullAction,
    OnPageChangeAction,
    // UpdatedLocationSuccessfullAction,
    // CreatedLocationSuccessfullAction
} from '@store/actions/itemdefinition.overview.action';
import { Action } from '@ngrx/store';
import { ItemDefinitionOverviewPageState } from '@store/states/itemdefinition.overview.page.state';


export function itemDefinitionOverviewPageReducer(state: ItemDefinitionOverviewPageState, action: any): ItemDefinitionOverviewPageState {
    switch (action.type) {
        case actionTypes.initialLoad:
            return Object.assign({}, state, { isLoading: true, filter: Object.assign({}, state.filter, { $skip: 0, $limit: 15 }) });
        case actionTypes.initialLoadSuccessfull:
            return handleLoadCompleted(state, action);
        case actionTypes.onPageChange:
            return handleOnPageChange(state, action);
        // case actionTypes.CreatedItemDefinitionSuccessfull:
        //     return handleCreatedLocation(state, action);
        // case actionTypes.UpdatedItemDefinitionSuccessfull:
        //     return handleUpdatedLocation(state, action);
        default:
            return state;
    }
}

function handleLoadCompleted(state: ItemDefinitionOverviewPageState, action: LoadSuccessfullAction): ItemDefinitionOverviewPageState {
    const copyState: ItemDefinitionOverviewPageState = Object.assign({}, state);
    copyState.errorMessage = null;
    copyState.isLoading = false;
    copyState.itemdefinitions = action.payload.data;
    copyState.count = action.payload.total;

    return copyState;
}

function handleOnPageChange(state: ItemDefinitionOverviewPageState, action: OnPageChangeAction): ItemDefinitionOverviewPageState {
    const copyState: ItemDefinitionOverviewPageState = Object.assign({}, state);
    copyState.filter =
        Object.assign({}, copyState.filter, {
            $limit: action.payload.pageSize,
            $skip: (action.payload.pageSize * action.payload.pageIndex)
        });

    return copyState;
}

// function handleCreatedLocation(state: ItemDefinitionOverviewPageState, action: CreateditemdeSuccessfullAction): ItemDefinitionOverviewPageState {
//     const copyState: ItemDefinitionOverviewPageState = Object.assign({}, state, { locations: [action.payload, ...state.locations] });

//     return copyState;
// }

// function handleUpdatedLocation(state: ItemDefinitionOverviewPageState, action: UpdatedLocationSuccessfullAction): ItemDefinitionOverviewPageState {
//     const updatedLocation = action.payload;
//     const locations: LocationModel[] = Object.assign([], state.locations);
//     const index = locations.findIndex(({ _id }) => _id === updatedLocation._id);

//     if (index > -1) {
//         locations[index] = updatedLocation;
//     }

//     return Object.assign({}, state, { locations });
// }
