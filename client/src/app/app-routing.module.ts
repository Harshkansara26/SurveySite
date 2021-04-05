import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './pages/about/about.component';
import { ContactComponent } from './pages/contact/contact.component';
import { CreateSurveyComponent } from './pages/create-survey/create-survey.component';
import { HomeComponent } from './pages/home/home.component';
import { SurveyOneEditComponent } from './pages/survey-one-edit/survey-one-edit.component';
import { SurveyTwoReadComponent } from './pages/survey-two-read/survey-two-read.component';
import { SurveyComponent } from './pages/survey/survey.component';
import { Survey1ResponseComponent } from './pages/survey1-response/survey1-response.component';
import { SurveyPage1Component } from './pages/surveypage1/survey-page1.component';
import { SurveyPage2Component } from './pages/surveypage2/survey-page2.component';
import { SurveyPage3Component } from './pages/surveypage3/survey-page3.component';


const routes: Routes = [
  
  {path: 'home', component: HomeComponent, data: {title: 'Home'}},
  {path: 'about', component: AboutComponent,data: {title: 'About'}},
  {path: 'survey', component: SurveyComponent, data: {title: 'Survey'}},
  {path: 'contact', component: ContactComponent, data: {title: 'Contact'}},
  {path: 'create-survey', component: CreateSurveyComponent, data: {title: 'Contact'}},
  {path:'surveyPageOne', component: SurveyPage1Component, data: {title: 'SurveyPageOne'}},
  {path:'surveyPageTwo', component: SurveyPage2Component, data: {title: 'SurveyPageTwo'}},
  {path:'surveyPageThree', component: SurveyPage3Component, data: {title: 'SurveyPageThree'}},
  {path:'surveyPageOne/response', component: Survey1ResponseComponent, data: {title: 'SurveyPageOneResponse'}},
  {path:'surveyTwoRead', component: SurveyTwoReadComponent, data: {title: 'SurveyTwoRead'}},
  //  Survey One Edit
  {path:'surveyPageOne/update/:reaponseId', component: SurveyOneEditComponent, data: {title: 'SurveyOneEdit'}},

  {path: 'admin', loadChildren: () => import('./admin/admin.module').then(m => m.AdminModule)},
  {path: 'login', data: {title: 'Login'}, redirectTo: '/admin/auth', pathMatch: 'full'},
  {path: '', redirectTo:'/home', pathMatch:'full'},
  {path: '**', redirectTo: '/home'},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
