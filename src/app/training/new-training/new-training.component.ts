import { Component, OnInit } from "@angular/core";
import { NgForm } from "@angular/forms";
import { Exercise } from "../exercise.model";
import { TrainingService } from "../training.service";

@Component({
    selector: "app-new-training",
    template: `
        <form (ngSubmit)="onStartTraining(f)" #f="ngForm">
            <mat-card>
                <mat-card-title>Time to start a workout!</mat-card-title>
                <mat-card-content>
                    <mat-form-field appearance="fill" color="accent">
                        <mat-label>Choose an exercise</mat-label>
                        <mat-select ngModel name="exercise" required>
                            <mat-option *ngFor="let ex of exercises" [value]="ex.id">
                                {{ ex.name }}
                            </mat-option>
                        </mat-select>
                    </mat-form-field>
                </mat-card-content>
                <mat-card-actions>
                    <button type="submit" mat-raised-button color="accent" [disabled]="f.invalid">
                        Start
                    </button>
                </mat-card-actions>
            </mat-card>
        </form>
    `,
    styleUrls: ["./new-training.component.scss"],
})
export class NewTrainingComponent implements OnInit {
    constructor(private trainingSrv: TrainingService) {}
    exercises: Exercise[] = [];

    ngOnInit(): void {
        this.exercises = this.trainingSrv.getAvailableExercises();
    }

    onStartTraining(form: NgForm) {
        this.trainingSrv.startExercise(form.value.exercise);
    }
}
