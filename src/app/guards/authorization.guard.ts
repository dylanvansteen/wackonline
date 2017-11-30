import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { AuthorizationService } from '@services/authorization/authorization.service';

@Injectable()
export class AuthorizationGuard implements CanActivate {

  constructor(
    private router: Router,
    private auth: AuthorizationService
  ) { }

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    return this.auth.refreshToken().catch(err => {
      this.router.navigate(['/login']);
      return Observable.of(false);
    });
  }
}
