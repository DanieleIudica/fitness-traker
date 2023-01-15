import { Component, OnInit, EventEmitter, Output } from "@angular/core";
import { MatDialog } from "@angular/material/dialog";
import { StopTrainingComponent } from "./stop-training.component";
@Component({
    selector: "app-current-training",
    templateUrl: "./current-training.component.html",
    styleUrls: ["./current-training.component.scss"],
})
export class CurrentTrainingComponent implements OnInit {
    progress = 0;
    timer: any;
    @Output() trainingExit = new EventEmitter();
    constructor(private dialog: MatDialog) {}

    ngOnInit(): void {
        this.startOrResumeTimer();
    }

    startOrResumeTimer() {
        this.timer = setInterval(() => {
            this.progress = this.progress + 1;
            if (this.progress >= 100) {
                clearInterval(this.timer);
            }
        }, 200);
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
            res ? this.trainingExit.emit() : this.startOrResumeTimer();
        });
    }
}
