import { Component, OnInit } from '@angular/core';
import { RestDataSource } from 'src/app/model/rest.datasource';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { SurveyService } from 'src/app/services/survey.service';

@Component({
  selector: 'app-create-survey-update',
  templateUrl: './create-survey-update.component.html',
  styleUrls: ['./create-survey-update.component.css']
})
export class CreateSurveyUpdateComponent implements OnInit {

   public surveyForm: FormGroup;
  public questionForm: FormGroup;
  public questionList: FormArray;
  public selectedType = '';
  public selectedIndex = 0;
  public optionsList: FormArray;
  public questiontypeOption = [
    {
      value: 'Text',
      label: 'Text',
    },
    {
      value: 'Multiple Choice',
      label: 'Multiple Choice',
    },
  ];

  constructor(private dataSource: RestDataSource, private route: ActivatedRoute, private formBuilder: FormBuilder, private serveyServices: SurveyService) {
  }

  ngOnInit(): void {
    this.displaySurveys(this.route.snapshot.params.surveyId)
    
  }

  setFormValue(value) {
    this.surveyForm = this.formBuilder.group({
      name: [value.name],
      questions: this.formBuilder.array([]),
    });
  }

  onCreateSurvey() {
    this.serveyServices.newResponse(this.surveyForm.value);
  }

  
  addQuestion(index) {
    this.selectedType = '';
    this.selectedIndex = index;
    this.questionList = this.surveyForm.get('questions') as FormArray;
    this.questionList.push(this.createQuestionForm());
  }

  createQuestionForm(value = null) {
    if (value === null) {
      return this.formBuilder.group({
        title: [''],
        type: [''],
        options: this.formBuilder.array([]),
        answer: [''],
      });
    } else {
      return this.formBuilder.group({
        title: [value.title],
        type: [value.type],
        options: this.formBuilder.array([]),
        answer: [value.answer],
      });
    }
  }

  addOption(index) {
    this.optionsList = this.surveyForm
      .get('questions')
      ['controls'][index].get('options') as FormArray;
    this.optionsList.push(this.createOptionForm());
  }

  createOptionForm(option = null) {
    if (option === null) {
      return this.formBuilder.group({
        value: [],
      });
    } else {
      return this.formBuilder.group({
        value: [option.value],
      });
    }
  }

  // onChangeQuestionType(event, i) {
  //   this.selectedType = event.target.value;
  //   this.selectedIndex = i;
  // }

  displaySurveys(id: string) {
    this.dataSource.getData(`survey/${id}`).subscribe((response: any) => {
      if (response.success) {
        let { questions, name } = response.data;
        this.setFormValue(response.data);
        const questionsArray = this.surveyForm.get('questions') as FormArray;
        if (questions.length) {
          questions.map((item, index) => {
            questionsArray.push(this.createQuestionForm(item));
            let optionsArray = this.surveyForm
              .get('questions')
              ['controls'][index].get('options') as FormArray;
            item.options.map((option, index) => {
              optionsArray.push(this.createOptionForm(option));
            });
          });
        }
      }
    });
  }



}
