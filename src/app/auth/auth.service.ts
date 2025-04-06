import { Injectable } from "@angular/core";
import { Subject } from "rxjs";
import { Router } from "@angular/router";

import { AuthData } from "./auth.model";
import { User } from "./user.model";

@Injectable({
    providedIn: 'root'
})
export class AuthService {
    authChange = new Subject<boolean>()
    private user!:User | null;

    constructor(
        private router: Router
    ){}

    public registerUser(authData: AuthData) {
        this.user = {
            email: authData.email,
            userId: Math.round(Math.random() * 1000).toString()
        }
        this.succesfullAuth();
    }

    public login(authData: AuthData) {
        this.user = {
            email: authData.email,
            userId: Math.round(Math.random() * 1000).toString()
        }
        this.succesfullAuth();
    }

    public logout() {
        this.user = null;
        this.authChange.next(false);
        this.router.navigate(['/login'])
    }

    public getUser() {
        return {...this.user};
    }

    public isAuth() {
       return this.user != null;
    }

    private succesfullAuth() {
        this.authChange.next(true);
        this.router.navigate(['/training'])
    }
}