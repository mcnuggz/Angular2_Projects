import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AngularFireModule } from 'angularfire2';

import { AppComponent } from './app.component';

// Must export the config
export const firebaseConfig = {
  apiKey: "AIzaSyCrTGoOPdfy--XcSooOKW1PMITuS21IM_w",
  authDomain: "businesscontacts-6a8c4.firebaseapp.com",
  databaseURL: "https://businesscontacts-6a8c4.firebaseio.com",
  storageBucket: "businesscontacts-6a8c4.appspot.com",
  messagingSenderId: "688958060572"
};

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AngularFireModule.initializeApp(firebaseConfig)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
