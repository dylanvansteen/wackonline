import { LoginPageState, INITIAL_LOGIN_PAGE_STATE } from '@store/states/login.page.state';
import { LocationOverviewPageState, INITIAL_LOCATIONOVERVIEW_PAGE_STATE } from '@store/states/location.overview.page.state';

export interface ApplicationState {
    loginPage: LoginPageState;
    locationOverviewPage: LocationOverviewPageState;
}

export const INITIAL_APPLICATION_STATE: ApplicationState = {
    loginPage: INITIAL_LOGIN_PAGE_STATE,
    locationOverviewPage: INITIAL_LOCATIONOVERVIEW_PAGE_STATE,
};
