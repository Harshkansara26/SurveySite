/**
 * Shrikant Kale: 301150258,Jefil Tasna John Mohan: 301149710,Vamsi Paladugu: 301174422,Harsh Kansara: 301172063,Dishank Trivedi: 301171796,Keyurkumar Sheladeeya: 301167490
 File name:app.module.ts
 group:4
 */
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './partials/header/header.component';
import { FooterComponent } from './partials/footer/footer.component';
import { HomeComponent } from './pages/home/home.component';
import { SurveyComponent } from './pages/survey/survey.component';
import { AboutComponent } from './pages/about/about.component';
import { ContactComponent } from './pages/contact/contact.component';
import { CreateSurveyComponent } from './pages/create-survey/create-survey.component';
import { SurveyPage1Component } from './pages/surveypage1/survey-page1.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SurveyPage2Component } from './pages/surveypage2/survey-page2.component';
import { SurveyPage3Component } from './pages/surveypage3/survey-page3.component';
import { Survey3ResponseModule } from './pages/survey3-response/survey3-response.module';

import { AuthComponent } from './admin/auth/auth.component';


import { JwtModule, JwtHelperService, JwtInterceptor } from '@auth0/angular-jwt';
import { AuthService } from './model/auth.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SurveyListComponent } from './pages/survey-list/survey-list.component';
import { SurveyTwoReadComponent } from './pages/survey-two-read/survey-two-read.component';
import { Survey1ResponseComponent } from './pages/survey1-response/survey1-response.component';
//Survey One Edit
import { SurveyOneEditComponent } from './pages/survey-one-edit/survey-one-edit.component';

export function jwtTokenGetter(): string {
  return localStorage.getItem('id_token') ||'{}';
}

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    SurveyComponent,
    AboutComponent,
    ContactComponent,
    CreateSurveyComponent,
    SurveyPage1Component,
    SurveyPage2Component,
    SurveyPage3Component,
    SurveyTwoReadComponent,
    Survey1ResponseComponent,
    
    //Survey One Edit
    SurveyOneEditComponent
    SurveyListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    JwtModule.forRoot({
      config: {
        tokenGetter: jwtTokenGetter
      }
    }),
    BrowserAnimationsModule,
    ReactiveFormsModule,
    // MaterialModule,
  ],
  providers: [AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
