import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, ParamMap } from '@angular/router';
import {SurveyOneRepository} from 'src/app/model/surveyOne.repository';
import {surveyPageOne} from 'src/app/model/surveyPageOne.model';


@Component({
  selector: 'app-survey-one-edit',
  templateUrl: './survey-one-edit.component.html',
  styleUrls: ['./survey-one-edit.component.css']
})
export class SurveyOneEditComponent implements OnInit {

  private reaponseId: string;

  constructor(private repository: SurveyOneRepository, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe((paramMap: ParamMap) => {
      this.reaponseId = paramMap.get('reaponseId');
      this.repository.getResponseBy(this.reaponseId) 
    });
  }

  get questions() : surveyPageOne { 
    return this.repository.getQuestions();
  }

  onUpdateSurveyOne(form: NgForm) {
    if(form.invalid){
      return;
    }

    let updatedResponse = new surveyPageOne ();
    updatedResponse._id = this.reaponseId;
    updatedResponse.questionOne= form.value.questionOne;
    updatedResponse.questionTwo= form.value.questionTwo;
    updatedResponse.questionThree= form.value.questionThree;
    updatedResponse.questionFour= form.value.questionFour;

    this.repository.updateResponce(updatedResponse);
    form.resetForm();
  }



  

}

