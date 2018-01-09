import { LoginPageState, INITIAL_LOGIN_PAGE_STATE } from '@store/states/login.page.state';
import { LocationOverviewPageState, INITIAL_LOCATIONOVERVIEW_PAGE_STATE } from '@store/states/location.overview.page.state';
import {
    ItemDefinitionOverviewPageState,
    INITIAL_ITEMDEFINITIONOVERVIEW_PAGE_STATE
} from '@store/states/itemdefinition.overview.page.state';

export interface ApplicationState {
    loginPage: LoginPageState;
    locationOverviewPage: LocationOverviewPageState;
    itemDefinitionOverviewPage: ItemDefinitionOverviewPageState;
}

export const INITIAL_APPLICATION_STATE: ApplicationState = {
    loginPage: INITIAL_LOGIN_PAGE_STATE,
    locationOverviewPage: INITIAL_LOCATIONOVERVIEW_PAGE_STATE,
    itemDefinitionOverviewPage: INITIAL_ITEMDEFINITIONOVERVIEW_PAGE_STATE
};
