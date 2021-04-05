/**
 * Shrikant Kale: 301150258,Jefil Tasna John Mohan: 301149710,Vamsi Paladugu: 301174422,Harsh Kansara: 301172063,Dishank Trivedi: 301171796,Keyurkumar Sheladeeya: 301167490
 group:4
 */
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {surveyPageThree} from './surveyPageThree.model';
import { RestDataSource } from './rest.datasource';


@Injectable({providedIn: 'root'})
export class SurveyThreeRepository
{
  private surveyThree! : surveyPageThree[];
  private loaded = false;

  constructor(private dataSource: RestDataSource) {}

  loadSurveys(): void
  {
    this.loaded = true;
    this.dataSource.getSurveyThree()
    .subscribe(surveyThree => this.surveyThree = surveyThree);
  }

  getSurveyThree(): surveyPageThree[]
  {
    if (!this.loaded)
    {
      this.loadSurveys();
    }
    return this.surveyThree;
  }

  saveSurveyThree(surveyThree: surveyPageThree): Observable<surveyPageThree>
  {
    return this.dataSource.saveSurveyThree(surveyThree);
  }

  deleteSurveyThreeBy(id: string) {
    this.dataSource.deleteSurveyThree(id).subscribe(response1 => {
      const updatedSurveyOne = this.surveyThree.filter(response => response._id !== response1);
      this.surveyThree = [...updatedSurveyOne]
    });
  }


}
