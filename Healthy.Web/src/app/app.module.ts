import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { MaterialModule } from './shared/material.module';

import { PersonComponent } from './Persons/person.component';
import { OverviewComponent } from './Overview/overview.component';
import { PageNotFoundComponent } from './Shared/page-not-found.component';
import { SideNavigationComponent } from './Shared/side-navigation.component';
import { ToolbarComponent } from './Shared/toolbar.component';


import { DataService } from './Services/data.service';
import { LogicService } from './Services/logic.service';
import { DecimalPipe } from '@angular/common';


@NgModule({
  declarations: [
    AppComponent,
    PersonComponent,
    PageNotFoundComponent,
    SideNavigationComponent,
    ToolbarComponent,
    OverviewComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    MaterialModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [DataService, LogicService, DecimalPipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
