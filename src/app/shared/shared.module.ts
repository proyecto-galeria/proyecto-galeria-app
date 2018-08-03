import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AgmCoreModule, AgmMap, AgmMarker } from "@agm/core";

import { SharedRoutingModule } from './shared-routing.module';

@NgModule({
  imports: [
    CommonModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyCEqQWUTDJJS6uWJXAdWQRA381hGoI1oHk'
    }),
    SharedRoutingModule
  ],
  declarations: [],
  exports: [AgmMap, AgmMarker]
})
export class SharedModule { }
