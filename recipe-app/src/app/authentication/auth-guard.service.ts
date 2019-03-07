import { CanActivate } from '@angular/router/src/utils/preactivation';
import { ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Injectable } from '@angular/core';
import { authService } from './authentication.service';

@Injectable()
export class authGuard implements CanActivate {
    constructor(private auth: authService){}
    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot){
        return this.auth.isAuthenticated(); //Will return a boolean representing the authentication
    }
}