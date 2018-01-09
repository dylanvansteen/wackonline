import { loginPageReducer } from '@store/reducers/login.page.reducer';
import { locationOverviewPageReducer } from '@store/reducers/location.overview.reducer';
import { itemDefinitionOverviewPageReducer } from '@store/reducers/itemdefinition.reducer';


export const reducers = {
    loginPage: loginPageReducer,
    locationOverviewPage: locationOverviewPageReducer,
    itemDefinitionOverviewPage: itemDefinitionOverviewPageReducer
};
