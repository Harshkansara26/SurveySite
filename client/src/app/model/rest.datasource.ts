/**
 * Shrikant Kale: 301150258,Jefil Tasna John Mohan: 301149710,Vamsi Paladugu: 301174422,Harsh Kansara: 301172063,Dishank Trivedi: 301171796,Keyurkumar Sheladeeya: 301167490
 group:4
 */
import { Injectable } from '@angular/core';
import { NgModule } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { surveyPageOne } from './surveyPageOne.model';
import { surveyPageTwo } from './surveyPageTwo.model';
import { surveyPageThree } from './surveyPageThree.model';
import { User } from './user.model';
const PROTOCOL = 'http';
const PORT = 5000;
@Injectable({providedIn: 'root'})
export class RestDataSource
{
  storeUserData: any;
  authenticate(user: User): Observable<any> {
    throw new Error('Method not implemented.');
  }
  loggedIn(): boolean {
    throw new Error('Method not implemented.');
  }
  baseUrl: string;
  private httpOptions =
  {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*',
    'Access-control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept'
    })
  };
  constructor(private http: HttpClient)
  {
    this.baseUrl = `${PROTOCOL}://${location.hostname}:${PORT}/`;
  }
  saveSurveyThree(surveyThree: surveyPageThree): Observable<surveyPageThree>
  {
    console.log(JSON.stringify(surveyThree));
    return this.http.post<surveyPageThree>(this.baseUrl + 'surveyThree/add', surveyThree);
  }

  getSurveyThree(): Observable<surveyPageThree[]>
  {
    return this.http.get<surveyPageThree[]>(this.baseUrl + 'surveyThree/list');
  }

  deleteSurveyThree(id: string) {
    let backendRouterPath = 'surveyThree/delete/'+id // has to be same as on the backend server
    return this.http.delete(this.baseUrl + backendRouterPath);
  }

  saveSurveyOne(surveyOne: surveyPageOne): Observable<surveyPageOne>
  {
    console.log(JSON.stringify(surveyOne));
    return this.http.post<surveyPageOne>(this.baseUrl + 'surveyOne/add', surveyOne);
  }
  getSurveyOne(): Observable<surveyPageOne[]>
  {
    return this.http.get<surveyPageOne[]>(this.baseUrl + 'surveyOne');
  }
  saveSurveyTwo(surveyTwo: surveyPageTwo): Observable<surveyPageTwo>
  {
    console.log(JSON.stringify(surveyTwo));
    return this.http.post<surveyPageTwo>(this.baseUrl + 'surveyTwo/add', surveyTwo);
  }
  getSurveyTwo(): Observable<surveyPageTwo[]>
  {
    return this.http.get<surveyPageTwo[]>(this.baseUrl + 'surveyTwo');
  }
}