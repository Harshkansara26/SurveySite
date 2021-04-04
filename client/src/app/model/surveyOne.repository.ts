/**
 * Shrikant Kale: 301150258,Jefil Tasna John Mohan: 301149710,Vamsi Paladugu: 301174422,Harsh Kansara: 301172063,Dishank Trivedi: 301171796,Keyurkumar Sheladeeya: 301167490
 group:4
 */
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {surveyPageOne} from './surveyPageOne.model';
import { RestDataSource } from './rest.datasource';


@Injectable({providedIn: 'root'})
export class SurveyOneRepository
{
  private surveyOne! : surveyPageOne[];
  private loaded = false;

  constructor(private dataSource: RestDataSource) {}

  loadSurveys(): void
  {
    this.loaded = true;
    this.dataSource.getSurveyOne()
    .subscribe(surveyOne => this.surveyOne = surveyOne);
  }

  getSurveyOne(): surveyPageOne[]
  {
    if (!this.loaded)
    {
      this.loadSurveys();
    }
    return this.surveyOne;
  }

  saveSurveyOne(surveyOne: surveyPageOne): Observable<surveyPageOne>
  {
    return this.dataSource.saveSurveyOne(surveyOne);
  }

  deleteSurveyOneBy(id: string) {
    this.dataSource.deleteSurveyOne(id).subscribe(response => {
      const updatedSurveyOne = this.surveyOne.filter(response => response._id !== response);
      this.surveyOne = [...updatedSurveyOne]
    });
  }


}
