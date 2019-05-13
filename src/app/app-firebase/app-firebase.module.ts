import { environment } from './../../environments/environment.prod';
import { NgModule } from '@angular/core';
import { AngularFireModule } from 'angularfire2';
import * as firebase from 'firebase';
import { AngularFireAuthModule } from 'angularfire2/auth';

@NgModule({
  imports: [
    AngularFireModule.initializeApp(environment.firebase, 'AuthApp'),
    AngularFireAuthModule
  ],
  exports: [
    AngularFireModule,
    AngularFireAuthModule
  ]
})
export class AppFirebaseModule { }
