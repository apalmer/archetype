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
import { MatSelectModule  } from "@angular/material/select";
import { MatRadioModule } from "@angular/material/radio";
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
import { ArchetypeComponent } from './archetype/archetype.component';
import { ArchetypesComponent } from './archetypes/archetypes.component';
import { ArchetypeSummaryComponent } from './archetype-summary/archetype-summary.component';
import { ArchetypeDialogComponent } from './archetype-dialog/archetype-dialog.component';
import { CharacterComponent } from './character/character.component';
import { CharacterSummaryComponent } from './character-summary/character-summary.component';
import { CharacterDialogComponent } from './character-dialog/character-dialog.component';
import { FieldControlComponent } from './field-control/field-control.component';
import { FieldDialogComponent } from './field-dialog/field-dialog.component';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatMenuModule } from '@angular/material/menu';
import { LayoutModule } from '@angular/cdk/layout';

@NgModule({
  declarations: [
    AppComponent,
    ArchetypesComponent,
    ArchetypeDialogComponent,
    ArchetypeSummaryComponent,
    CharacterComponent,
    CharacterSummaryComponent,
    CharacterDialogComponent,
    ArchetypeComponent,
    FieldControlComponent,
    FieldDialogComponent
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
    MatSelectModule,
    MatRadioModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    NgxAuthFirebaseUIModule.forRoot(
      environment.firebase,
      environment.ngxFireBaseUiAppNameFactory,
      environment.ngxFirebaseUi
    ),
    MatGridListModule,
    MatMenuModule,
    LayoutModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
