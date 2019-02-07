import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { LoginComponent } from './login/login.component';
import { PasswordMangerComponent } from './password-manger/password-manger.component';

const routes: Routes = [
  { path: '', redirectTo: '/manager', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'manager', component: PasswordMangerComponent },


  { path: '*', component: PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
