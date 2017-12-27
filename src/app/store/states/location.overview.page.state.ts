import { LocationModel, LocationOverviewFilters } from '@services/location/location.contracts';

export interface LocationOverviewPageState {
    isLoading: boolean;
    errorMessage: string;
    locations: LocationModel[];
    filter: LocationOverviewFilters;
    count: number;
}

export const INITIAL_LOCATIONOVERVIEW_PAGE_STATE: LocationOverviewPageState = {
    isLoading: false,
    errorMessage: null,
    locations: [],
    filter: { $limit: 5, $sort: '-modifiedOn' },
    count: 0
};
