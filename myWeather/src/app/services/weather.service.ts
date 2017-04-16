import {Injectable} from '@angular/core';
import {Http} from '@angular/http';
import 'rxjs/Rx';

@Injectable()

export class WeatherService{
    http: any;
    apiKey: string;
    conditionsUrl: string;

    constructor(http: Http){
        this.http = http;
        this.apiKey = "c4c7c26b5f9441f4";
        this.conditionsUrl = "http://api.wunderground.com/api/" + this.apiKey + "/conditions/q/";
    }

    getWeather(city, state){
        return this.http.get(this.conditionsUrl + '/'+state+'/'+city+'.json').map(res => res.json());
    }
}