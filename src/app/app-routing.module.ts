import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from '@views/login/login.component';
import { AuthorizationGuard } from '@guards/authorization.guard';

const routes: Routes = [
  { path: '', redirectTo: 'app', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'app', loadChildren: 'app/views/app/main.module#MainModule', canActivate: [AuthorizationGuard] }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  providers: [
    AuthorizationGuard
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
