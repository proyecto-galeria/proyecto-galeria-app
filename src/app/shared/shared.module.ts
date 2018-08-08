import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AgmCoreModule, AgmMap, AgmMarker } from "@agm/core";

import { SharedRoutingModule } from './shared-routing.module';
import { DateTextPipe } from './pipes/date-text.pipe';

import { PhotoUploadComponent } from "./photo-upload/photo-upload.component";
import { environment } from '../../environments/environment';

import { WebcamModule, WebcamComponent } from "ngx-webcam";


import { FileUploadModule } from "ng2-file-upload";


@NgModule({
  imports: [
    CommonModule,
    WebcamModule,
    FileUploadModule,
    AgmCoreModule.forRoot({
      apiKey: environment.agm.api_key
    }),
    SharedRoutingModule,
    
  ],
  declarations: [DateTextPipe, PhotoUploadComponent],
  exports: [AgmMap, AgmMarker, DateTextPipe, PhotoUploadComponent, WebcamComponent]
})
export class SharedModule { }
