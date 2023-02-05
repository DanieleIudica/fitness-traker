import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { MyMaterialModule } from "./my-material/my-material.module";
import { LoginComponent } from "./auth/login/login.component";
import { SignupComponent } from "./auth/signup/signup.component";
import { TrainingComponent } from "./training/training.component";
import { NewTrainingComponent } from "./training/new-training/new-training.component";
import { PastTrainingsComponent } from "./training/past-trainings/past-trainings.component";
import { CurrentTrainingComponent } from "./training/current-training/current-training.component";
import { WelcomeComponent } from "./welcome/welcome.component";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { SidenavListComponent } from "./navigation/sidenav-list/sidenav-list.component";
import { HeaderComponent } from "./navigation/header/header.component";
import { StopTrainingComponent } from "./training/current-training/stop-training.component";
import { AuthService } from "./auth/auth.service";
import { initializeApp, provideFirebaseApp } from "@angular/fire/app";
import { environment } from "../environments/environment";
import { provideAuth, getAuth } from "@angular/fire/auth";
import { provideFirestore, getFirestore } from "@angular/fire/firestore";

@NgModule({
    declarations: [
        AppComponent,
        LoginComponent,
        SignupComponent,
        TrainingComponent,
        NewTrainingComponent,
        PastTrainingsComponent,
        CurrentTrainingComponent,
        WelcomeComponent,
        SidenavListComponent,
        HeaderComponent,
        StopTrainingComponent,
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        BrowserAnimationsModule,
        MyMaterialModule,
        FormsModule,
        ReactiveFormsModule,
        provideFirebaseApp(() => initializeApp(environment.firebase)),
        provideAuth(() => getAuth()),
        provideFirestore(() => getFirestore()),
    ],
    providers: [AuthService],
    bootstrap: [AppComponent],
    // entryComponents: [StopTrainingComponent],s
})
export class AppModule {}
