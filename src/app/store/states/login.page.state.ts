export interface LoginPageState {
    signinIn: boolean;
    errorMessage: string;
}

export const INITIAL_LOGIN_PAGE_STATE: LoginPageState = {
    signinIn: false,
    errorMessage: undefined,
};
