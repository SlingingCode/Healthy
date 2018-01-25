import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { MaterialModule } from './shared/material.module';

import { PersonComponent } from './Persons/person.component';
import { ScaleResultsComponent } from './ScaleResults/scale-results.component';
import { PageNotFoundComponent } from './Misc/page-not-found.component';
import { DataService } from './data.service';


@NgModule({
  declarations: [
    AppComponent,
    PersonComponent,
    ScaleResultsComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    MaterialModule,
    HttpClientModule
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
