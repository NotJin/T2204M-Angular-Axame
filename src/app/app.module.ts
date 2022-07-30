import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import {ExameComponent} from "./axame/exame.component";
import {ContentrightComponent} from "./axame/contentright.component";
import {RouterModule, Routes} from "@angular/router";

const appRoutes: Routes = [
  {path: 'content', component: ContentrightComponent},
];
@NgModule({
  declarations: [
    AppComponent,
    ExameComponent,
    ContentrightComponent
  ],
  imports: [
    BrowserModule,
    RouterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
