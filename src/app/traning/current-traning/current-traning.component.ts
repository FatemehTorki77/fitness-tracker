import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

import { StopTrainingComponent } from './stop-training/stop-training.component';

@Component({
  selector: 'app-current-traning',
  templateUrl: './current-traning.component.html',
  styleUrl: './current-traning.component.css'
})
export class CurrentTraningComponent implements OnInit {
  progress: number = 0;
  timer: any;
  @Output() dialogEvent = new EventEmitter<void>()

  constructor(private dialog:MatDialog){}

  public ngOnInit(): void {
   this.startOrResumeTraining();
  }

  public startOrResumeTraining() {
    this.timer = setInterval(() => {
      this.progress += 5;
      if(this.progress >= 100 ){
        clearInterval(this.timer);
      }
    },1000);
  }

  public onStop() {
    clearInterval(this.timer);
    const dialogRef = this.dialog.open(StopTrainingComponent, {
      data: {
        progress: this.progress
      }
    });

    dialogRef.afterClosed().subscribe(result => {
      if(result) {
        this.dialogEvent.emit()
      }else {
        this.startOrResumeTraining();
      }
    });
  }
}
