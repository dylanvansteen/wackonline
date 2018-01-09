import { ItemDefinitionModel, ItemDefinitionOverviewFilters } from '@services/itemdefinition/itemdefinition.contracts';

export interface ItemDefinitionOverviewPageState {
    isLoading: boolean;
    errorMessage: string;
    itemdefinitions: ItemDefinitionModel[];
    filter: ItemDefinitionOverviewFilters;
    count: number;
}

export const INITIAL_ITEMDEFINITIONOVERVIEW_PAGE_STATE: ItemDefinitionOverviewPageState = {
    isLoading: false,
    errorMessage: null,
    itemdefinitions: [],
    filter: { $limit: 5, $sort: '-modifiedOn' },
    count: 0
};
