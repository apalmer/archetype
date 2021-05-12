//Angular Modules
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
//Angular Fire Modules
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
//Material Design Modules
import { MatToolbarModule } from '@angular/material/toolbar'; 
import { MatIconModule } from "@angular/material/icon";
//Firebase
import { NgxAuthFirebaseUIModule } from 'ngx-auth-firebaseui';
//App Core Modules
import { environment } from 'src/environments/environment';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatIconModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    NgxAuthFirebaseUIModule.forRoot(
      environment.firebase,
      environment.ngxFireBaseUiAppNameFactory,
      environment.ngxFirebaseUi
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
