import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PasswordItemComponent } from './password-item/password-item.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AngularFireModule} from '@angular/fire'
import { AngularFireDatabaseModule} from '@angular/fire/database'
import {AngularFirestoreModule} from '@angular/fire/firestore'
import {environment} from '../environments/environment'

import {
  MatListModule,
  MatButtonModule,
  MatExpansionModule,
  MatFormFieldModule,
  MatToolbarModule,
  MatIconModule,
  MatInputModule,
  MatGridListModule,
  MatSortModule,
  MatTableModule,
  MatCardModule,
  MatTabsModule,
  MatDialogModule,
  MatSidenavModule,
  MatSelectModule
} from '@angular/material';
import { FlexLayoutModule } from '@angular/flex-layout';
import { PasswordGroupComponent } from './password-group/password-group.component';
import { PasswordMangerComponent } from './password-manger/password-manger.component';
import { LoginComponent } from './login/login.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { PasswordFieldComponent } from './password-field/password-field.component';
import { DeletePasswordDialogComponent } from './delete-password-dialog/delete-password-dialog.component';
import { AddNewPasswordComponent } from './add-new-password/add-new-password.component';
import { FileUploadComponent } from './file-upload/file-upload.component';
import { AddNewGroupComponent } from './add-new-group/add-new-group.component';
import { StoreModule } from '@ngrx/store';
import {allreducers, passwordsReducer, groupReducer } from './store/reducer';
import { HttpClientModule } from '@angular/common/http';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { AuthService } from './services/auth.service';
import { AngularFireAuth } from '@angular/fire/auth';
import { NgxAuthFirebaseUIModule } from 'ngx-auth-firebaseui';
import { HotkeysModule } from './hotkeys/hotkeys.module';

@NgModule({
  declarations: [
    AppComponent,
    PasswordItemComponent,
    PasswordGroupComponent,
    PasswordMangerComponent,
    LoginComponent,
    PageNotFoundComponent,
    PasswordFieldComponent,
    DeletePasswordDialogComponent,
    AddNewPasswordComponent,
    FileUploadComponent,
    AddNewGroupComponent,
    UserProfileComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    AngularFireDatabaseModule,
    AppRoutingModule,
    NgxAuthFirebaseUIModule.forRoot(environment.firebase),
    MatListModule,
    MatButtonModule,
    MatExpansionModule,
    MatFormFieldModule,
    MatToolbarModule,
    HttpClientModule,
    MatIconModule,
    MatInputModule,
    MatGridListModule,
    MatTableModule,
    MatSortModule,
    MatCardModule,
    MatSelectModule,
    MatToolbarModule,
    MatSidenavModule,
    MatDialogModule,
    MatTabsModule,
    HotkeysModule,
    FormsModule,
    FlexLayoutModule,
    ReactiveFormsModule,
    StoreModule.forRoot(allreducers)
  ],
  providers: [AuthService, AngularFireAuth],
  bootstrap: [AppComponent],
  entryComponents: [AddNewPasswordComponent, FileUploadComponent, AddNewGroupComponent]
})
export class AppModule { }
