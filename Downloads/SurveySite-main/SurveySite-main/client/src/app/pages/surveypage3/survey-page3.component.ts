/**
 * Shrikant Kale: 301150258,Jefil Tasna John Mohan: 301149710,Vamsi Paladugu: 301174422,Harsh Kansara: 301172063,Dishank Trivedi: 301171796,Keyurkumar Sheladeeya: 301167490
 group:4
 */
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { surveyPageThree } from 'src/app/model/surveyPageThree.model';
import {SurveyThreeRepository} from 'src/app/model/surveyThree.repository';

@Component({
  selector: 'app-survey-page3',
  templateUrl: './survey-page3.component.html',
  styleUrls: ['./survey-page3.component.css']
})
export class SurveyPage3Component implements OnInit {
  formSubmitted = false;
  submitted = false;

  constructor(public repository: SurveyThreeRepository,
              public surveyThree: surveyPageThree) { }

  ngOnInit(): void {
  }

  submitSurvey(form: NgForm): void
  {
    this.submitted = true;
    if (form.valid)
    {
      this.repository.saveSurveyThree(this.surveyThree).subscribe(surveyThree => {
        this.formSubmitted = true;
        this.submitted = false;
      });
    }
  }

}
