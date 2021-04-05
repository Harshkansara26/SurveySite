
import { Component, OnInit } from '@angular/core';

import { NgForm } from '@angular/forms';
import {SurveyThreeRepository} from 'src/app/model/surveyThree.repository';
import { surveyPageThree } from 'src/app/model/surveyPageThree.model';


@Component({
  selector: 'app-survey3-response',
  templateUrl: './survey3-response.component.html',
  styleUrls: ['./survey3-response.component.css']
})
export class Survey3ResponseComponent implements OnInit {

  constructor(public repository: SurveyThreeRepository){ 

  }

  ngOnInit(): void {
  }

  get surveyThree() : surveyPageThree[] {
    return this.repository.getSurveyThree();
  }

  // onDeleteRes(id: string) {
  //   return this.repository.deleteSurveyThreeBy(id);
  // }

}