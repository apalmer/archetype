import { Component } from '@angular/core';

import { AngularFireAuth } from '@angular/fire/auth';

import { AuthProvider } from 'ngx-auth-firebaseui';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'archetype';
  
  providers = AuthProvider;

  constructor(public auth: AngularFireAuth) { }

  printUser(event: any) {
    console.log(event);
  }

  printError(event: any) {
    //console.error(event);
  }
}
