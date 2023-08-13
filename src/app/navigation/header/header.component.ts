import { Component, OnInit, Output, EventEmitter, OnDestroy } from "@angular/core";
import { Subscription } from "rxjs";
import { AuthService } from "src/app/auth/auth.service";

@Component({
    selector: "app-header",
    template: `
        <mat-toolbar>
            <div class="toolBarMenu">
                <button class="burgerMenu" (click)="onToggleSidenav()" mat-icon-button>
                    <mat-icon>menu</mat-icon>
                </button>
                <a routerLink="/" class="logo"><mat-icon>home</mat-icon></a>
            </div>
            <div class="toolBarLinks">
                <a routerLink="/signup" *ngIf="!isAuth">Signup</a>
                <a routerLink="/login" *ngIf="!isAuth">Login</a>
                <a routerLink="/training" *ngIf="isAuth">Training</a>
                <a *ngIf="isAuth" (click)="onLogout()">Logout</a>
            </div>
        </mat-toolbar>
    `,
    styleUrls: ["./header.component.scss"],
})
export class HeaderComponent implements OnInit, OnDestroy {
    @Output() sidenavToggle = new EventEmitter<void>();
    isAuth = false;
    authSubscription: Subscription | undefined;
    constructor(private authSrv: AuthService) {}

    ngOnInit(): void {
        this.authSubscription =  this.authSrv.authChange.subscribe((authStatus) => {
            this.isAuth = authStatus;
        });
    }

    onToggleSidenav() {
        this.sidenavToggle.emit();
    }

    onLogout() {
        this.authSrv.logout();
    }

    ngOnDestroy() {
        this.authSubscription?.unsubscribe();
    }
}
