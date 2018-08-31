import { BrowserModule } from '@angular/platform-browser';

import { NgModule } from '@angular/core';

import { HttpClientModule } from '@angular/common/http';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from './app.component';

import { SharedModule } from "./shared/shared.module";
import { InstructionsModule } from "./instructions/instructions.module";
import { RecordsModule } from "../app/records/records.module";

// los siguientes dos componentes deberían migrarse a un Shared Module
import { HomePageComponent } from './ui/home-page/home-page.component';
import { NotFoundComponent } from './ui/not-found/not-found.component';

import { BackendFakeService } from "./core/services/backend-fake/backend-fake.service";

import { RecordsService } from "./records/records.service";


import { CloudinaryModule, CloudinaryConfiguration, Cloudinary } from '@cloudinary/angular-5.x';

import { FileUploadModule } from 'ng2-file-upload';
import { environment } from '../environments/environment';
import { UsersModule } from './users/users.module';

@NgModule({
  declarations: [
    AppComponent,
    // los siguientes dos componentes deberían migrarse a un Shared Module
    HomePageComponent,
    NotFoundComponent
  ],
  imports: [
    BrowserModule,
    SharedModule,
    UsersModule,
    InstructionsModule,
    RecordsModule,
    
    AppRoutingModule,
    HttpClientModule,
    HttpClientInMemoryWebApiModule.forRoot(
      BackendFakeService, {
        dataEncapsulation: false,
        passThruUnknownUrl: true
      }
    ),


    CloudinaryModule.forRoot({Cloudinary}, {
      cloud_name: environment.cloudinary.cloud_name
    } as CloudinaryConfiguration),

  ],
  providers: [
    SharedModule,
    // InstructionsModule,
    // RecordsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
