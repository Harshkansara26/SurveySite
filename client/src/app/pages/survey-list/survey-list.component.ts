import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { RestDataSource } from 'src/app/model/rest.datasource';
import { SurveyService } from 'src/app/services/survey.service';

@Component({
  selector: 'app-survey-list',
  templateUrl: './survey-list.component.html',
  styleUrls: ['./survey-list.component.css'],
})
export class SurveyListComponent implements OnInit {
  public surveys = [];
  constructor(
    private surveyServices: SurveyService,
    private httpClient: HttpClient,
    private dataSource: RestDataSource
  ) {}

  ngOnInit(): void {
    this.getSurveys();
  }

  getSurveys() {
    this.dataSource.getData('survey').subscribe((response: any) => {
      if (response.success) {
        this.surveys = response.data;
      }
    });
  }
}
