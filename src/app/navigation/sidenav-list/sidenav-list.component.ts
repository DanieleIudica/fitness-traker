import { Component, Output, OnInit, EventEmitter } from "@angular/core";
import { Subscription } from "rxjs";
import { AuthService } from "src/app/auth/auth.service";

@Component({
    selector: "app-sidenav-list",
    template: `
        <div class="sideNavLinks">
            <a routerLink="/signup" *ngIf="!isAuth" (click)="onCloseSidenav()"
                ><mat-icon>face</mat-icon><span>Signup</span></a
            >
            <a routerLink="/login" *ngIf="!isAuth" (click)="onCloseSidenav()"
                ><mat-icon>input</mat-icon><span>Login</span></a
            >
            <a routerLink="/training" *ngIf="isAuth" (click)="onCloseSidenav()"
                ><mat-icon>fitness_center</mat-icon><span>Training</span></a
            >
            <button mat-icon-button class="logoutBtn" *ngIf="isAuth" (click)="onLogout()">
                <mat-icon>logout</mat-icon><span>Logout</span>
            </button>
        </div>
    `,
    styleUrls: ["./sidenav-list.component.scss"],
})
export class SidenavListComponent implements OnInit {
    @Output() sidenavClose = new EventEmitter<void>();
    isAuth = false;
    authSubscription: Subscription | undefined;

    constructor(private authSrv: AuthService) {}

    ngOnInit(): void {
        this.authSrv.authChange.subscribe((authStatus) => {
            this.isAuth = authStatus;
        });
    }

    onCloseSidenav() {
        this.sidenavClose.emit();
    }

    onLogout() {
        this.onCloseSidenav();
        this.authSrv.logout();
    }

    ngOnDestroy() {
        this.authSubscription?.unsubscribe();
    }
}
