/**
 * Shrikant Kale: 301150258,Jefil Tasna John Mohan: 301149710,Vamsi Paladugu: 301174422,Harsh Kansara: 301172063,Dishank Trivedi: 301171796,Keyurkumar Sheladeeya: 301167490
 group:4
 */
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {surveyPageTwo} from './surveyPageTwo.model';
import { RestDataSource } from './rest.datasource';
import { Router } from '@angular/router';


@Injectable({providedIn: 'root'})
export class SurveyTwoRepository
{
  //private surveyTwo! : surveyPageTwo[];
  private questions : surveyPageTwo[] = [];
  private question! : surveyPageTwo;
  

  constructor(private dataSource: RestDataSource, private router: Router) {

    dataSource.getQuestions().subscribe(data => {
      this.questions = data;
    });
  }

  getQuestions(): surveyPageTwo[] {
    return [...this.questions]
  }

  // getQuestionBy(id: string) {
  //   this.dataSource.getAQuestion(id).subscribe(data => {
  //     this.question = data
  //   });
  // }

  // getQuestion() {
  //   return this.question
  // }



  saveSurveyTwo(surveyTwo: surveyPageTwo): Observable<surveyPageTwo>
  {
    return this.dataSource.saveSurveyTwo(surveyTwo);
  }

  deleteResponseBy(id: string) {
    this.dataSource.surveyTwoDeleteAResponse(id).subscribe(response => {
      const updatedResponse = this.questions.filter(question => question._id !== response);
      this.questions = [...updatedResponse]
    });


}
}
