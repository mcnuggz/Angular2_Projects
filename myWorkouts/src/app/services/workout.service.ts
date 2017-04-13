import {Injectable} from '@angular/core';
import {Http, Headers, RequestOptions} from '@angular/http';
import 'rxjs/Rx';

@Injectable()
export class WorkoutService {
    http : any;
    apiKey : string;
    workoutUrl : string;

    constructor(http : Http) {
        this.http = http;
        this.apiKey = "bBqe4fkKCmXtosmiw5g6VnS016Ka-QH3";
        this.workoutUrl = "https://api.mlab.com/api/1/databases/myworkouts/collections/workouts"
    }

    getWorkouts() {
        return this
            .http
            .get(this.workoutUrl + '?apiKey=' + this.apiKey)
            .map(res => res.json());
    }

    addWorkout(workout){
        var headers = new Headers();
        headers.append('Content-Type', 'application/json');
        return this.http.post(this.workoutUrl + '?apiKey=' + this.apiKey, JSON.stringify(workout), {headers: headers}).map(res => res.json());
    }
}