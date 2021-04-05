/**
 * Shrikant Kale: 301150258,Jefil Tasna John Mohan: 301149710,Vamsi Paladugu: 301174422,Harsh Kansara: 301172063,Dishank Trivedi: 301171796,Keyurkumar Sheladeeya: 301167490
 group:4
 */
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { SurveyService } from '../../services/survey.service';

@Component({
  selector: 'app-create-survey',
  templateUrl: './create-survey.component.html',
  styleUrls: ['./create-survey.component.css'],
})
export class CreateSurveyComponent implements OnInit {
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

  constructor(
    private formBuilder: FormBuilder,
    private serveyServices: SurveyService // httpClient: HttpClient
  ) {}

  ngOnInit(): void {
    this.setFormValue();
  }

  setFormValue() {
    this.surveyForm = this.formBuilder.group({
      name: [''],
      questions: this.formBuilder.array([this.createQuestionForm()]),
    });
  }

  onCreateSurvey() {
    this.serveyServices.newSurvey(this.surveyForm.value);
  }

  addQuestion(index) {
    this.selectedType = '';
    this.selectedIndex = index;
    this.questionList = this.surveyForm.get('questions') as FormArray;
    this.questionList.push(this.createQuestionForm());
  }

  createQuestionForm() {
    return this.formBuilder.group({
      title: [''],
      type: [''],
      options: this.formBuilder.array([this.createOptionForm()]),
      answer: [''],
    });
  }

  addOption(index) {
    this.optionsList = this.surveyForm
      .get('questions')
      ['controls'][index].get('options') as FormArray;
    this.optionsList.push(this.createOptionForm());
  }

  createOptionForm() {
    return this.formBuilder.group({
      value: [''],
    });
  }

  onChangeQuestionType(event, i) {
    this.selectedType = event.target.value;
    this.selectedIndex = i;
  }
}
