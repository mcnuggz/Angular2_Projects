import {Injectable} from '@angular/core';
import {Http, Headers, RequestOptions} from '@angular/http';
import 'rxjs/Rx';

@Injectable()
export class WorkoutService{
    _http: any;
    apiKey: string;
    workoutUrl: string;

    constructor(http: Http){
        this._http = http;
        this.apiKey = "bBqe4fkKCmXtosmiw5g6VnS016Ka-QH3";
        this.workoutUrl = 'https://api.mlab.com/databases/myworkouts/collections/workouts';
    }

    getWorkouts(){
        return this._http.get(this.workoutUrl + '?apiKey=' + this.apiKey).map(res => res.json());
    }
}