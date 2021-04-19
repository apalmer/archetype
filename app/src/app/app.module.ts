//Angular Modules
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
//Material Design Modules
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { MatInputModule } from '@angular/material/input';
//Angular Fire Modules
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
//Angular Fire Extensions
import { NgxAuthFirebaseUIModule } from 'ngx-auth-firebaseui';
//App Core Modules
import { environment } from 'src/environments/environment';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
//App Components
import { CharacterComponent } from './character/character.component';
import { ArchetypeComponent } from './archetype/archetype.component';
import { ArchetypeDialogComponent } from './archetype-dialog/archetype-dialog.component';
import { ArchetypeSummaryComponent } from './archetype-summary/archetype-summary.component';

@NgModule({
  declarations: [
    AppComponent,
    CharacterComponent,
    ArchetypeComponent,
    ArchetypeDialogComponent,
    ArchetypeSummaryComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    MatToolbarModule,
    MatIconModule,
    MatCardModule,
    MatButtonModule,
    MatDialogModule,
    MatInputModule,
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
