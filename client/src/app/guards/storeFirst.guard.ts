import { Injectable } from '@angular/core'
import { Router, ActivatedRouteSnapshot, RouterStateSnapshot, CanActivate } from '@angular/router'
import { AuthService } from '../model/auth.service'

@Injectable()
export class StoreFirstGuard implements CanActivate {
    constructor(private router: Router, private authService: AuthService) { }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
        const isAuth = this.authService.authenticated
        if (!isAuth) {
            this.router.navigateByUrl('/login');
        }
        return true
    }
}