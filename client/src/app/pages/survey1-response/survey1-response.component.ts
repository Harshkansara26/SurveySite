import { Component, OnInit } from '@angular/core';

import { NgForm } from '@angular/forms';
import {SurveyOneRepository} from 'src/app/model/surveyOne.repository';
import { surveyPageOne } from 'src/app/model/surveyPageOne.model';


@Component({
  selector: 'app-survey1-response',
  templateUrl: './survey1-response.component.html',
  styleUrls: ['./survey1-response.component.css']
})
export class Survey1ResponseComponent implements OnInit {

  constructor(public repository: SurveyOneRepository){ 

  }

  ngOnInit(): void {
  }

  get surveyOne() : surveyPageOne[] {
    return this.repository.getSurveyOne();
  }

  onDeleteRes(id: string) {
    return this.repository.deleteSurveyOneBy(id);
  }

}
