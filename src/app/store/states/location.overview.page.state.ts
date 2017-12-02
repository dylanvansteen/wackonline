import { LocationModel } from '@services/location/location.contracts';

export interface LocationOverviewPageState {
    isLoading: boolean;
    errorMessage: string;
    locations: LocationModel[];
}

export const INITIAL_LOCATIONOVERVIEW_PAGE_STATE: LocationOverviewPageState = {
    isLoading: false,
    errorMessage: null,
    locations: [],
};
