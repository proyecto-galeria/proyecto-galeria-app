import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AgmCoreModule, AgmMap, AgmMarker } from "@agm/core";

import { SharedRoutingModule } from './shared-routing.module';
import { DateTextPipe } from './pipes/date-text.pipe';

@NgModule({
  imports: [
    CommonModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyCEqQWUTDJJS6uWJXAdWQRA381hGoI1oHk'
    }),
    SharedRoutingModule,
    
  ],
  declarations: [DateTextPipe],
  exports: [AgmMap, AgmMarker, DateTextPipe]
})
export class SharedModule { }
