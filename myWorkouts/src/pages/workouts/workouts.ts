import {Component} from '@angular/core';
import {NavController} from 'ionic-angular';
import {WorkoutService} from '../../app/services/workout.service';
import {WorkoutDetailsPage} from '../workout-details/workout-details';

@Component({selector: 'workouts', templateUrl: 'workouts.html'})
export class WorkoutsPage {
  workouts : any;
  constructor(public navCtrl : NavController, private _workoutService : WorkoutService) {}

  ngOnInit() {
    this
      ._workoutService
      .getWorkouts()
      .subscribe(workouts => {
        this.workouts = workouts;
      });
  }

  workoutSelected(event, workout) {
    this
      .navCtrl
      .push(WorkoutDetailsPage, {workout: workout});
  }
}