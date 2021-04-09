import { Component, OnInit } from '@angular/core';
import { RestDataSource } from 'src/app/model/rest.datasource';
import { SurveyService } from 'src/app/services/survey.service';
import { HttpClient } from '@angular/common/http';

declare var M: any;

@Component({
  selector: 'app-survey-list-response',
  templateUrl: './survey-list-response.component.html',
  styleUrls: ['./survey-list-response.component.css']
})
export class SurveyListResponseComponent implements OnInit {

  public surveys = [];

  constructor(   private surveyServices: SurveyService,
    private httpClient: HttpClient,
    private dataSource: RestDataSource) {
    
   }

  ngOnInit(): void {
    this.getResponses();
  }

  getResponses() {
    this.dataSource.getData('fillSurvey').subscribe((response: any) => {
      if (response.success) {
        this.surveys = response.data;
        // console.log(response.data);
      }
    });
  }

  onDeleteResponse(id: string) {
    if(confirm('Are you sure?')== true)
    this.dataSource.deleteSurveyResponse(id).subscribe((res)=> {
      this.getResponses();
      M.toast({html: 'Deleted successfully', classes: 'rounded'});
    })
  }

}
