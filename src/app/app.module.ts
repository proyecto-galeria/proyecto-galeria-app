import { BrowserModule } from '@angular/platform-browser';

import { NgModule } from '@angular/core';

import { HttpClientModule } from '@angular/common/http';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from './app.component';

import { RecordsModule } from "../app/records/records.module";

// los siguientes dos componentes deberían migrarse a un Shared Module
import { HomePageComponent } from './ui/home-page/home-page.component';
import { NotFoundComponent } from './ui/not-found/not-found.component';

import { BackendFakeService } from "./core/services/backend-fake/backend-fake.service";

import { RecordsService } from "./records/records.service";

@NgModule({
  declarations: [
    AppComponent,
    // los siguientes dos componentes deberían migrarse a un Shared Module
    HomePageComponent,
    NotFoundComponent
  ],
  imports: [
    BrowserModule,
    RecordsModule,
    AppRoutingModule,
    HttpClientModule,
    HttpClientInMemoryWebApiModule.forRoot(
      BackendFakeService, {
        dataEncapsulation: false,
        passThruUnknownUrl: true
      }
    ),
  ],
  providers: [
    RecordsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
