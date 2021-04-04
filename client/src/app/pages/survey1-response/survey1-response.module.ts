import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Survey1ResponseComponent } from './survey1-response.component';
import { BrowserModule } from '@angular/platform-browser';
import { ModelModule } from '../../model/model.module';


@NgModule({
  declarations: [
    Survey1ResponseComponent
  ],
  imports: [
    CommonModule, ModelModule, BrowserModule
  ],
  exports: [
    Survey1ResponseComponent
  ]
})
export class Survey1ResponseModule { }
