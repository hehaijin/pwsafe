import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PasswordItemComponent } from './password-item/password-item.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
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
import { AddNewComponent } from './add-new/add-new.component';
import { DeletePasswordDialogComponent } from './delete-password-dialog/delete-password-dialog.component';
import { AddNewPasswordComponent } from './add-new-password/add-new-password.component';
import { FileUploadComponent } from './file-upload/file-upload.component';
import { AddNewGroupComponent } from './add-new-group/add-new-group.component';
import { StoreModule } from '@ngrx/store';
import { passwordsReducer } from './store/reducer';

@NgModule({
  declarations: [
    AppComponent,
    PasswordItemComponent,
    PasswordGroupComponent,
    PasswordMangerComponent,
    LoginComponent,
    PageNotFoundComponent,
    PasswordFieldComponent,
    AddNewComponent,
    DeletePasswordDialogComponent,
    AddNewPasswordComponent,
    FileUploadComponent,
    AddNewGroupComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    MatListModule,
    MatButtonModule,
    MatExpansionModule,
    MatFormFieldModule,
    MatToolbarModule,
    MatIconModule,
    MatInputModule,
    MatGridListModule,
    MatTableModule,
    MatSortModule,
    MatCardModule,
    MatSelectModule,
    MatToolbarModule,
    MatSidenavModule,
    MatTabsModule,
    MatDialogModule,
    FormsModule,
    FlexLayoutModule,
    ReactiveFormsModule,
    StoreModule.forRoot({passwords: passwordsReducer})
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents:[AddNewPasswordComponent,FileUploadComponent, AddNewGroupComponent]
})
export class AppModule { }
