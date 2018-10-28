import { Component } from '@angular/core';
import * as firebase from 'firebase' ;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  
  constructor(){
    var config = {
      apiKey: "AIzaSyAMKi8NzV_qya3bWqxs_16q1KWTTYun-Uo",
      authDomain: "library-54528.firebaseapp.com",
      databaseURL: "https://library-54528.firebaseio.com",
      projectId: "library-54528",
      storageBucket: "library-54528.appspot.com",
      messagingSenderId: "813202743495"
    };
    firebase.initializeApp(config);
  }


}
