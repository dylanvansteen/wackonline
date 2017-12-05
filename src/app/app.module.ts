import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { LocationStrategy, HashLocationStrategy } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';
import { AppRoutingModule } from './app-routing.module';
import { MaterialModule } from './material.module';

import { AppComponent } from './app.component';
import { LoginComponent } from './views/login/login.component';

import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { EffectsModule } from '@ngrx/effects';
import { routerReducer, StoreRouterConnectingModule } from '@ngrx/router-store';
import { storeFreeze } from 'ngrx-store-freeze';
import { ReactiveFormsModule } from '@angular/forms';
import { AuthorizationService } from '@services/authorization/authorization.service';
import { reducers } from '@store/reducers';
import { INITIAL_APPLICATION_STATE } from '@store/application.state';
import { LoginPageEffectService } from '@store/effects/login.page.effect';
import { AuthenticationInterceptor } from '@interceptors/authentication.interceptor';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    ReactiveFormsModule,
    FlexLayoutModule,
    StoreModule.forRoot(reducers, { metaReducers: [storeFreeze], initialState: INITIAL_APPLICATION_STATE }),
    StoreDevtoolsModule.instrument(),
    EffectsModule.forRoot([LoginPageEffectService]),
  ],
  providers: [
    AuthorizationService,
    { provide: LocationStrategy, useClass: HashLocationStrategy },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthenticationInterceptor,
      multi: true,
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
