import { NgModule } from '@angular/core';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { Routes, RouterModule } from '@angular/router';

const route: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'signup', component: SignupComponent }
];

@NgModule({
  imports: [RouterModule.forChild(route)],
  exports: [RouterModule]
})
export class AuthRoutingModule {}
