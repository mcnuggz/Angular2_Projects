import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {WeatherService} from '../../app/services/weather.service';

@Component({
  selector: 'weather',
  templateUrl: 'weather.html'
})
export class WeatherPage {
  city: string;
  state: string;

  constructor(public navCtrl: NavController, private weatherService: WeatherService) {
    this.city = 'St. Louis';
    this.state = 'MO';
  }

  ngOnInit(){
    this.weatherService.getWeather(this.city, this.state).subscribe(weather => {
      console.log(weather);
    });
  }

}