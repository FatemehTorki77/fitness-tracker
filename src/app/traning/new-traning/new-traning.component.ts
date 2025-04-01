import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-new-traning',
  templateUrl: './new-traning.component.html',
  styleUrl: './new-traning.component.css'
})
export class NewTraningComponent {
  @Output() trainingStart = new EventEmitter<void>();

  public onStartTraining() {
    this.trainingStart.emit()
  }
}
