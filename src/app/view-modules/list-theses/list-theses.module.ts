import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { ListMainComponent } from './list-main/list-main.component';
import { MaterialModule } from '../../../material.module';


@NgModule({
  declarations: [
    ListMainComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialModule
  ],
  exports: [
    ListMainComponent
  ]
})
export class ListThesesModule { }
