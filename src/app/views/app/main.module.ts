import { MainComponent } from './main.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuComponent } from './components/menu/menu.component';
import { Routes } from '@angular/router';
import { RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { MaterialModule } from 'app/material.module';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthenticationInterceptor } from '@interceptors/authentication.interceptor';
import { MatDialogModule } from '@angular/material';

const routes: Routes = [
  {
    path: '', component: MainComponent, children: [
      { path: '', redirectTo: 'home', pathMatch: 'full' },
      { path: 'home', component: HomeComponent },
      { path: 'location', loadChildren: 'app/views/app/location/location.module#LocationModule' },
      { path: 'itemdefinition', loadChildren: 'app/views/app/itemdefinition/itemdefinition.module#ItemDefinitionModule' },
    ]
  },
];

@NgModule({
  imports: [
    RouterModule.forChild(routes),
    CommonModule,
    MaterialModule
  ],
  providers: [
  ],
  declarations: [
    MainComponent,
    MenuComponent,
    HomeComponent,
  ]
})
export class MainModule { }
