import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import { RecordsModule } from "../app/records/records.module";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    RecordsModule
  ],
  providers: [
    // RecordsModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
