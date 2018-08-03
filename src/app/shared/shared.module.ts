import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AgmCoreModule } from "@agm/core";

import { SharedRoutingModule } from './shared-routing.module';

@NgModule({
  imports: [
    CommonModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyCEqQWUTDJJS6uWJXAdWQRA381hGoI1oHk'
    }),
    SharedRoutingModule
  ],
  declarations: []
})
export class SharedModule { }
