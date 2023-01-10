import { Component, OnInit, Output, EventEmitter } from "@angular/core";

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
                <a routerLink="/signup">Signup</a>
                <a routerLink="/login">Login</a>
                <a routerLink="/training">Training</a>
                <a routerLink="/">Logout</a>
            </div>
        </mat-toolbar>
    `,
    styleUrls: ["./header.component.scss"],
})
export class HeaderComponent implements OnInit {
    @Output() sidenavToggle = new EventEmitter<void>();

    constructor() {}

    ngOnInit(): void {}

    onToggleSidenav() {
        this.sidenavToggle.emit();
    }
}
