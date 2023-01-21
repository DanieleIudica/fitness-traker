import { Component, OnInit } from "@angular/core";
import { MatDialog } from "@angular/material/dialog";
import { TrainingService } from "../training.service";
import { StopTrainingComponent } from "./stop-training.component";
@Component({
    selector: "app-current-training",
    template: `
        <section>
            <mat-progress-spinner
                mode="determinate"
                [value]="progress"
                color="primary"
            ></mat-progress-spinner>
            <h1>{{ runningExercise.name }}</h1>
            <h2>{{ progress }} %</h2>
            <p>Keep on going, you can do it!</p>
            <button type="submit" mat-raised-button color="primary" (click)="onStop()">Stop</button>
        </section>
    `,
    styleUrls: ["./current-training.component.scss"],
})
export class CurrentTrainingComponent implements OnInit {
    progress = 0;
    timer: any;
    // inizialmente veniva gestita la fine di un allenamento con l'evento trainingExit, poi questo viene gestito dal service
    // @Output() trainingExit = new EventEmitter();
    constructor(private dialog: MatDialog, private trainingSrv: TrainingService) {}
    runningExercise = this.trainingSrv.getRunningExercise();

    ngOnInit(): void {
        this.startOrResumeTimer();
    }

    startOrResumeTimer() {
        const step = (this.trainingSrv.getRunningExercise().duration! / 100) * 1000;
        this.timer = setInterval(() => {
            this.progress = this.progress + 1;
            if (this.progress >= 100) {
                this.trainingSrv.completeExercise();
                clearInterval(this.timer);
            }
        }, step);
    }

    onStop() {
        clearInterval(this.timer);
        const dialogRef = this.dialog.open(StopTrainingComponent, {
            data: {
                progress: this.progress,
            },
        });

        dialogRef.afterClosed().subscribe((res) => {
            // console.log('res', res)
            res ? this.trainingSrv.cancelExercise(this.progress) : this.startOrResumeTimer();
        });
    }
}
