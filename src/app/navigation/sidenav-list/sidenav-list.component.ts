import { Component, Output, OnInit, EventEmitter } from "@angular/core";

@Component({
    selector: "app-sidenav-list",
    template: `
        <div class="sideNavLinks">
            <a routerLink="/signup" (click)="onCloseSidenav()"
                ><mat-icon>face</mat-icon><span>Signup</span></a
            >
            <a routerLink="/login" (click)="onCloseSidenav()"
                ><mat-icon>input</mat-icon><span>Login</span></a
            >
            <a routerLink="/training" (click)="onCloseSidenav()"
                ><mat-icon>fitness_center</mat-icon><span>Training</span></a
            >
            <button mat-icon-button class="logoutBtn" (click)="onCloseSidenav()">
                <mat-icon>logout</mat-icon><span>Logout</span>
            </button>
        </div>
    `,
    styleUrls: ["./sidenav-list.component.scss"],
})
export class SidenavListComponent implements OnInit {
    @Output() sidenavClose = new EventEmitter<void>();

    constructor() {}

    ngOnInit(): void {}

    onCloseSidenav() {
        this.sidenavClose.emit();
    }
}
