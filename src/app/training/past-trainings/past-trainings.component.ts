import { Component, OnInit, ViewChild } from "@angular/core";
import { MatSort } from "@angular/material/sort";
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
    dataSource!: MatTableDataSource<Exercise>;
    @ViewChild(MatSort) sort!: MatSort;

    constructor(private trainingSrv: TrainingService) {}

    pastTrainingsArr = this.trainingSrv.getCompleteOrCanecelledExercises();

    ngOnInit(): void {
        this.dataSource = new MatTableDataSource(this.pastTrainingsArr);
    }

    ngAfterViewInit(): void {
        this.dataSource.sort = this.sort;
    }

    applyFilter(event: Event) {
        const filterValue = (event.target as HTMLInputElement).value;
        this.dataSource.filter = filterValue.trim().toLowerCase();

        // if (this.dataSource.paginator) {
        //   this.dataSource.paginator.firstPage();
        // }
    }
}
