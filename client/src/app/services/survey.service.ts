import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { RestDataSource } from '../model/rest.datasource';

@Injectable({
  providedIn: 'root',
})
export class SurveyService {

  private surveys! : any[];

  constructor(private dataSource: RestDataSource, private router: Router) {}

  // get Surveys
  getSurveys() {
    return this.dataSource.getData('survey/').subscribe((response: any) => {
      return response;
    });
  }

  //get Survey responses
  getReponses() {
    return this.dataSource.getData('fillSurvey/').subscribe((response: any) => {
      return response;
    });
  }

  //create new Survey Templates
  newSurvey(values) {
    return this.dataSource
      .postData('survey/create', values)
      .subscribe((response: any) => {
        if (response.success) {
          this.router.navigate(['/survey-list']);
        }
      });
  }

  //create new Survey Response
  newResponse(values) {
    return this.dataSource
      .postData('fillSurvey/create', values)
      .subscribe((response: any) => {
        if (response.success) {
          this.router.navigate(['/survey-list']);
        }
      });
  }


}
