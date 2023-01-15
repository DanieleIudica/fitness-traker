import { Component, Inject } from "@angular/core";
import { MAT_DIALOG_DATA } from "@angular/material/dialog";

@Component({
    selector: "app-stop-training",
    template: `
        <div class="dialog">
            <h1 mat-dialog-title>Are you sure?</h1>
            <div mat-dialog-content>You already got {{ passedData.progress }} %</div>
            <div mat-dialog-actions>
                <button mat-raised-button color="accent" [mat-dialog-close]="true">Yes</button>
                <button mat-raised-button color="warn" [mat-dialog-close]="false">No</button>
            </div>
        </div>
    `,
    styles: [
        `
            .dialog {
                padding: 25px;
                text-align: center;
            }
        `,
    ],
})
export class StopTrainingComponent {
    constructor(
        @Inject(MAT_DIALOG_DATA)
        public passedData: {
            progress: number;
        }
    ) {}
}
