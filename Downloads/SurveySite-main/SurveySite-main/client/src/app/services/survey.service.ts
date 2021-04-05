import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { RestDataSource } from '../model/rest.datasource';

@Injectable({
  providedIn: 'root',
})
export class SurveyService {
  constructor(private dataSource: RestDataSource, private router: Router) {}

  getSurveys() {
    return this.dataSource.getData('survey/').subscribe((response: any) => {
      return response;
    });
  }

  newSurvey(values) {
    return this.dataSource
      .postData('survey/create', values)
      .subscribe((response: any) => {
        if (response.success) {
          this.router.navigate(['/survey-list']);
        }
      });
  }
}
