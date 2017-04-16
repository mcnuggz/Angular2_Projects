import {Injectable} from '@angular/core';
import {Http} from '@angular/http';
import 'rxjs/Rx';

@Injectable()

export class WeatherService{
    http: any;
    apiKey: string;
    conditionsUrl: string;
    searchUrl: string;

    constructor(http: Http){
        this.http = http;
        this.apiKey = "c4c7c26b5f9441f4";
        this.conditionsUrl = "http://api.wunderground.com/api/" + this.apiKey + "/conditions/q/";
        this.searchUrl = 'http://localhost:8100/search/aq?query=';
    }

    getWeather(zmw){
        return this.http.get(this.conditionsUrl + '/zmw:'+zmw+'.json').map(res => res.json());
    }

    searchCities(searchStr){
        return this.http.get(this.searchUrl + searchStr).map(res => res.json());
    }
}