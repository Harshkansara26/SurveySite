import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { NgForm } from '@angular/forms';
import {SurveyTwoRepository} from 'src/app/model/surveyTwo.repository';
import {surveyPageTwo} from 'src/app/model/surveyPageTwo.model';

@Component({
  selector: 'app-survey-two-read',
  templateUrl: './survey-two-read.component.html',
  styleUrls: ['./survey-two-read.component.css']
})
export class SurveyTwoReadComponent implements OnInit {

  private questionId: any;

  constructor(private repository: SurveyTwoRepository, private route: ActivatedRoute) { }

   ngOnInit(): void {
    
   }

  get questions(): surveyPageTwo[] {
    return this.repository.getQuestions();
  }

  onDeleteResponse(id: string) {
    return this.repository.deleteResponseBy(id);
  }

}
