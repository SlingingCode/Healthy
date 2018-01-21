import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { PersonComponent } from './Persons/person.component';
import { ScaleResultsComponent } from './ScaleResults/scale-results.component';
import { PageNotFoundComponent } from './Misc/page-not-found.component';


@NgModule({
  declarations: [
    AppComponent,
    PersonComponent,
    ScaleResultsComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
