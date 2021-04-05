/**
 * Shrikant Kale: 301150258,Jefil Tasna John Mohan: 301149710,Vamsi Paladugu: 301174422,Harsh Kansara: 301172063,Dishank Trivedi: 301171796,Keyurkumar Sheladeeya: 301167490
 group:4
 */
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {surveyPageOne} from './surveyPageOne.model';
import { RestDataSource } from './rest.datasource';
import { Router } from '@angular/router';


@Injectable({providedIn: 'root'})
export class SurveyOneRepository
{
  private surveyOne : surveyPageOne[] = [];
  private response : surveyPageOne;
  
  //private loaded = false;

  constructor(private dataSource: RestDataSource, private router: Router) {

    dataSource.getSurveyOne().subscribe(data => {
      this.surveyOne = data;
    });

  }

  getSurveyOne(): surveyPageOne[]
  {
    return [...this.surveyOne]
  }

  saveSurveyOne(surveyOne: surveyPageOne): Observable<surveyPageOne>
  {
    return this.dataSource.saveSurveyOne(surveyOne);
  }

  deleteSurveyOneBy(id: string) {
    this.dataSource.deleteSurveyOne(id).subscribe(response1 => {
      const updatedSurveyOne = this.surveyOne.filter(response => response._id !== response1);
      this.surveyOne = [...updatedSurveyOne]
    });
  }


  //Survey One Edit
  getResponseBy(id: string) {
    this.dataSource.getSurveyOneRes(id).subscribe(data => {
      this.response = data
    });
  }

  getQuestions() {
    return this.response
  }

  updateResponce(response: surveyPageOne) {
    
    this.dataSource.updateSurveyOneRes(response).subscribe(data => {
      this.response = data
      const updatedSurveyOne = [...this.surveyOne];
      const oldResponseIndex = updatedSurveyOne.findIndex(p => p._id === this.response._id);
      updatedSurveyOne[oldResponseIndex] = this.response;
      this.surveyOne = updatedSurveyOne;
      this.router.navigate(['surveyPageOne/response']);
    });
  }


}
