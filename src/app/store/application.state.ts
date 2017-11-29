import { LoginPageState, INITIAL_LOGIN_PAGE_STATE } from '@store/states/login.page.state';

export interface ApplicationState {
    loginPage: LoginPageState;
}

export const INITIAL_APPLICATION_STATE: ApplicationState = {
    loginPage: INITIAL_LOGIN_PAGE_STATE,
};
