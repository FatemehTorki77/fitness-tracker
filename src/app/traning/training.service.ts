import { Injectable } from "@angular/core";

import { Exercise } from "./exercise.model";

@Injectable({
    providedIn: 'root'
})
export class TrainingService {

    private availableExercises: Exercise[] = [
        {id: 'crunches', name: 'کرانچ', duration: 38, calories: 8, state: null},
        {id: 'squat', name: 'اسکوات', duration: 180, calories: 15, state: null},
        {id: 'side-lunges', name: 'لانچ اسکوات', duration: 120, calories: 18, state: null},
        {id: 'burpess', name: 'شنا', duration: 60, calories: 20, state: null}
    ];

    public getEvailableExercises() {
        return this.availableExercises.slice()
    }
}