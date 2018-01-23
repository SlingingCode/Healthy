import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
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
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
