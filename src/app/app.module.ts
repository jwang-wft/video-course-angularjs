import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import {
  MatInputModule,
  MatCardModule,
  MatButtonModule,
  MatToolbarModule,
  MatExpansionModule,
  MatProgressSpinnerModule,
  MatSidenavModule,
  MatFormFieldModule,
  MatIconModule,
  MatRadioModule,
  MatSlideToggleModule,
  MatSelectModule,
  MatTooltipModule
} from '@angular/material';
import {  MatVideoModule } from 'mat-video';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { CourseComponent } from './course/course.component';
import { HeaderComponent } from './header/header.component';

import { from } from 'rxjs';
import { LoginComponent } from './auth/login/login.component';
import { SignupComponent } from './auth/signup/signup.component';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CourseComponent,
    HeaderComponent,
    LoginComponent,
    SignupComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatCardModule,
    MatButtonModule,
    MatToolbarModule,
    MatExpansionModule,
    MatProgressSpinnerModule,
    HttpClientModule,
    MatVideoModule,
    MatSidenavModule,
    MatButtonModule,
    MatFormFieldModule,
    MatIconModule,
    MatRadioModule,
    MatSlideToggleModule,
    MatTooltipModule,
    MatSelectModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
