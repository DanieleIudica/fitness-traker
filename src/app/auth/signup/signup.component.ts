import { Component, OnInit } from "@angular/core";
import { NgForm } from "@angular/forms";
import { AuthService } from "../auth.service";

@Component({
    selector: "app-signup",
    templateUrl: "./signup.component.html",
    styleUrls: ["./signup.component.scss"],
})
export class SignupComponent implements OnInit {
    maxDate = new Date();
    constructor(private authSrv: AuthService) {}

    ngOnInit(): void {
        this.maxDate.setFullYear(this.maxDate.getFullYear() - 18);
        console.log("maxDate", this.maxDate);
    }

    onSubmit(form: NgForm) {
        this.authSrv.registerUser({
            email: form.value.email,
            password: form.value.password,
        });
    }
}
