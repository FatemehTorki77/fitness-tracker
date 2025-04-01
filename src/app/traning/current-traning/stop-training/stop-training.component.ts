import { Component, Inject } from "@angular/core";
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
    selector:'app-stop-training',
    templateUrl: './stop-training.component.html',
    styleUrl: './stop-training.component.css'
})
export class StopTrainingComponent{
    // گرفتن درتا در انگولار متریال به این شکله
    constructor(@Inject(MAT_DIALOG_DATA) public passedData: any){}
}