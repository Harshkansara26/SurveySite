
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Survey3ResponseComponent } from './survey3-response.component';
import { BrowserModule } from '@angular/platform-browser';
import { ModelModule } from '../../model/model.module';


@NgModule({
  declarations: [
    Survey3ResponseComponent
  ],
  imports: [
    CommonModule, ModelModule, BrowserModule
  ],
  exports: [
    Survey3ResponseComponent
  ]
})
export class Survey3ResponseModule { }