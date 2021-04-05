/**
 * Shrikant Kale: 301150258,Jefil Tasna John Mohan: 301149710,Vamsi Paladugu: 301174422,Harsh Kansara: 301172063,Dishank Trivedi: 301171796,Keyurkumar Sheladeeya: 301167490
 group:4
 */
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { surveyPageTwo } from 'src/app/model/surveyPageTwo.model';
import {SurveyTwoRepository} from 'src/app/model/surveyTwo.repository';

@Component({
  selector: 'app-survey-page2',
  templateUrl: './survey-page2.component.html',
  styleUrls: ['./survey-page2.component.css']
})
export class SurveyPage2Component implements OnInit {
  formSubmitted = false;
  submitted = false;

  constructor(public repository: SurveyTwoRepository,
              public surveyTwo: surveyPageTwo) { }

  ngOnInit(): void {
  }

  submitSurvey(form: NgForm): void
  {
    this.submitted = true;
    if (form.valid)
    {
      this.repository.saveSurveyTwo(this.surveyTwo).subscribe(surveyTwo => {
        this.formSubmitted = true;
        this.submitted = false;
      });
    }
  }

}
