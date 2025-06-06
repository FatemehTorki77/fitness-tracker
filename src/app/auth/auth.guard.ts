import { inject, Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivateFn, Router, RouterStateSnapshot } from "@angular/router";

import { AuthService } from "./auth.service";

@Injectable({
    providedIn: 'root'
})
class PermissionsService {

    constructor(
        private router: Router,
        private authService: AuthService
    ) {}

    canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
        if(this.authService.isAuth()) {
            return true;
        } else {
            this.router.navigate(['/login']);
            return false;
        }
    }
}

export const AuthGuard: CanActivateFn = (next: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean => {
    return inject(PermissionsService).canActivate(next, state);
}