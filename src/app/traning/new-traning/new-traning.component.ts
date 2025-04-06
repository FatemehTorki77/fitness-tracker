import { Component, EventEmitter, OnInit, Output } from '@angular/core';

import { TrainingService } from '../training.service';
import { Exercise } from '../exercise.model';

@Component({
  selector: 'app-new-traning',
  templateUrl: './new-traning.component.html',
  styleUrl: './new-traning.component.css'
})
export class NewTraningComponent implements OnInit{

  @Output() trainingStart = new EventEmitter<void>();
  exercises: Exercise[] = [];

  constructor(
    private trainingService: TrainingService
  ){}

  public ngOnInit(): void {
    this.exercises = this.trainingService.getEvailableExercises();
  }

  public onStartTraining() {
    this.trainingStart.emit();
  }
}
