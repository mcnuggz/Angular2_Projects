import {NgModule, ErrorHandler} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {IonicApp, IonicModule, IonicErrorHandler} from 'ionic-angular';
import {MyApp} from './app.component';
import {HttpModule} from '@angular/http';

import {AboutPage} from '../pages/about/about';
import {AddWorkoutPage} from '../pages/add-workout/add-workout';
import {WorkoutsPage} from '../pages/workouts/workouts';
import {TabsPage} from '../pages/tabs/tabs';
import {WorkoutDetailsPage} from '../pages/workout-details/workout-details';

import {StatusBar} from '@ionic-native/status-bar';
import {SplashScreen} from '@ionic-native/splash-screen';

@NgModule({
  declarations: [
    MyApp, AboutPage, WorkoutsPage, AddWorkoutPage, TabsPage, WorkoutDetailsPage
  ],
  imports: [
    BrowserModule, HttpModule ,IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp, AboutPage, WorkoutsPage, AddWorkoutPage, TabsPage, WorkoutDetailsPage
  ],
  providers: [
    StatusBar,
    SplashScreen, {
      provide: ErrorHandler,
      useClass: IonicErrorHandler
    }
  ]
})
export class AppModule {}