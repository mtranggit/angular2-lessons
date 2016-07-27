import {Component} from '@angular/core';
import {Router, ROUTER_DIRECTIVES} from "@angular/router";
import {LoginService} from "./login.service";

@Component({
    selector: 'app',
    directives: [ROUTER_DIRECTIVES],
    styles:[`
a.active {
    font-weight: bold;
}

a:not(.active) {
    text-decoration: none;
}
`],
    template: `<!-- The address bar is for help viewing the URL in online demos-->
<div class="address-bar">
    Online Demo Address Bar: <input
        (keyup.enter)="onEnter($event.target.value)"
        [value]="router.url"
>
</div>
<hr>
<button (click)="loginService.login$.next(true)">Login</button>
<button (click)="loginService.login$.next(false)">Logout</button>
{{loginService.loginTimeout$ | async}}
<nav>
    <a
        routerLink=""
        routerLinkActive="active"
        [routerLinkActiveOptions]="{exact:true}"
    >
        Home
    </a>

    <a
        routerLink="contacts"
        routerLinkActive="active"
        [routerLinkActiveOptions]="{exact:true}"
    >
        Contacts
    </a>
</nav>
<router-outlet></router-outlet>
  `
})
export class App {
    onEnter(url) {
        this.router.navigate([url]);
    }

    constructor(private loginService:LoginService, private router:Router) {
    }
}