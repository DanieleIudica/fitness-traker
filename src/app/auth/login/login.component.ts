import { Component, OnInit } from "@angular/core";
import { NgForm } from "@angular/forms";
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { AuthService } from "../auth.service";

@Component({
    selector: "app-login",
    templateUrl: "./login.component.html",
    styleUrls: ["./login.component.scss"],
})
export class LoginComponent implements OnInit {
    loginForm!: FormGroup;
    constructor(private authSrv: AuthService) {}
    ngOnInit(): void {
        this.loginForm = new FormGroup({
            email: new FormControl(null, [Validators.required, Validators.email]),
            password: new FormControl(null, Validators.required),
        });
    }

    onSubmit() {
        this.authSrv.login({
            email: this.loginForm.value.email,
            password: this.loginForm.value.password,
        });
    }
}
