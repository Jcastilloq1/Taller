import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { SeriesModule } from './Series/Series.module'; 


@NgModule({
   declarations: [
      AppComponent
   ],
   imports: [
      BrowserModule,
      SeriesModule,
      HttpClientModule
   ],
   providers: [],
   bootstrap: [
      AppComponent
   ]
})
export class AppModule { }
