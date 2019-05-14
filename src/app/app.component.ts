import { Component, OnInit } from '@angular/core';

import { AngularFireAuth } from 'angularfire2/auth';
import { auth } from 'firebase';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{

  title = 'firebase-angula-auth-app';

  constructor( private afAuth: AngularFireAuth){}

  ngOnInit(){
    this.afAuth.authState.subscribe((user) => {
      console.log(user);
    })
  }

  googleSignInViaPopup() {
    this.afAuth.auth.signInWithPopup(new auth.GoogleAuthProvider())
    .then((userCredentials) => console.log(userCredentials));
  }

  googleSignInViaRedirect(){
    this.afAuth.auth.signInWithRedirect(new auth.GoogleAuthProvider())
    .then((userCredentials) => console.log(userCredentials));
  }
}
