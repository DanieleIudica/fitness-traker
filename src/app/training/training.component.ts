import { Component, OnInit } from "@angular/core";
import { TrainingService } from "./training.service";
import { Subscription } from "rxjs";

@Component({
    selector: "app-training",
    template: `
        <mat-tab-group
            color="accent"
            mat-align-tabs="center"
            mat-stretch-tabs="true"
            *ngIf="!onGoingTraining"
        >
            <mat-tab label="New exercise"><app-new-training></app-new-training></mat-tab>
            <mat-tab label="Past exercise"><app-past-trainings></app-past-trainings></mat-tab>
        </mat-tab-group>
        <app-current-training *ngIf="onGoingTraining"></app-current-training>
    `,

    styleUrls: ["./training.component.scss"],
})
export class TrainingComponent implements OnInit {
    onGoingTraining = false;
    exerciseSubscription!: Subscription;
    constructor(private trainingSrv: TrainingService) {}

    ngOnInit(): void {
        this.exerciseSubscription = this.trainingSrv.exerciseChanged.subscribe((exercise) => {
            exercise ? (this.onGoingTraining = true) : (this.onGoingTraining = false);
        });
    }
}
