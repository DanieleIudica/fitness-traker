import { Component, OnInit } from "@angular/core";
import { MatTableDataSource } from "@angular/material/table";
import { Exercise } from "../exercise.model";
import { TrainingService } from "../training.service";

@Component({
    selector: "app-past-trainings",
    templateUrl: "./past-trainings.component.html",
    styleUrls: ["./past-trainings.component.scss"],
})
export class PastTrainingsComponent implements OnInit {
    displayedColumns = ["date", "name", "calories", "duration", "state"];
    dataSource!: Exercise[];

    constructor(private trainingSrv: TrainingService) {}

    ngOnInit(): void {
        this.dataSource = this.trainingSrv.getCompleteOrCanecelledExercises();
    }
}
