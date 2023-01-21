import { Injectable } from "@angular/core";
import { Exercise } from "./exercise.model";
// per emettere eventi dal service
import { Subject } from "rxjs";

@Injectable({
    providedIn: "root",
})
export class TrainingService {
    exerciseChanged = new Subject<Exercise | undefined>();

    private availableExercise: Exercise[] = [
        { id: "crunches", name: "Crunches", duration: 30, calories: 8 },
        { id: "touch-toes", name: "Touch Toes", duration: 180, calories: 15 },
        { id: "side-lunges", name: "Side Lunges", duration: 120, calories: 18 },
        { id: "burpees", name: "Burpees", duration: 60, calories: 8 },
    ];

    private runningExercise: Exercise | undefined;
    private exercices: Exercise[] = [];

    getAvailableExercises() {
        return this.availableExercise.slice();
    }

    startExercise(selectedId: string) {
        this.runningExercise = this.availableExercise.find((ex) => ex.id === selectedId);
        this.exerciseChanged.next({ ...this.runningExercise! });
    }

    completeExercise() {
        this.exercices.push({ ...this.runningExercise!, date: new Date(), state: "completed" });
        this.runningExercise = undefined;
        this.exerciseChanged.next(undefined);
    }

    cancelExercise(progress: number) {
        this.exercices.push({
            ...this.runningExercise!,
            duration: this.runningExercise!.duration * (progress / 100),
            calories: this.runningExercise!.calories * (progress / 100),
            date: new Date(),
            state: "cancelled",
        });
        this.runningExercise = undefined;
        this.exerciseChanged.next(undefined);
    }

    getRunningExercise() {
        return { ...this.runningExercise };
    }
}

// import { Subject } from 'rxjs/Subject';
// import 'rxjs/add/operator/map';

// import { Exercise } from './exercise.model';

// export class TrainingService {
//   exerciseChanged = new Subject<Exercise>();
//   private availableExercises: Exercise[] = [
//     { id: 'crunches', name: 'Crunches', duration: 30, calories: 8 },
//     { id: 'touch-toes', name: 'Touch Toes', duration: 180, calories: 15 },
//     { id: 'side-lunges', name: 'Side Lunges', duration: 120, calories: 18 },
//     { id: 'burpees', name: 'Burpees', duration: 60, calories: 8 }
//   ];
//   private runningExercise: Exercise;
//   private exercises: Exercise[] = [];

//   getAvailableExercises() {
//     return this.availableExercises.slice();
//   }

//   startExercise(selectedId: string) {
//     this.runningExercise = this.availableExercises.find(
//       ex => ex.id === selectedId
//     );
//     this.exerciseChanged.next({ ...this.runningExercise });
//   }

//   completeExercise() {
//     this.exercises.push({
//       ...this.runningExercise,
//       date: new Date(),
//       state: 'completed'
//     });
//     this.runningExercise = null;
//     this.exerciseChanged.next(null);
//   }

//   cancelExercise(progress: number) {
//     this.exercises.push({
//       ...this.runningExercise,
//       duration: this.runningExercise.duration * (progress / 100),
//       calories: this.runningExercise.duration * (progress / 100),
//       date: new Date(),
//       state: 'cancelled'
//     });
//     this.runningExercise = null;
//     this.exerciseChanged.next(null);
//   }

//   getRunningExercise() {
//     return { ...this.runningExercise };
//   }
// }
