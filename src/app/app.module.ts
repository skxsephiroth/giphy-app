import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material.module'

import { AppComponent } from './app.component';
import { SearchComponent } from './component/search.component';
import { GiphyService } from './giphy.service';


@NgModule({
  declarations: [
    AppComponent,
    SearchComponent
  ],
  imports: [
    BrowserModule, BrowserAnimationsModule,
    MaterialModule, FormsModule, HttpClientModule, 
  ],
  providers: [GiphyService],
  bootstrap: [AppComponent]
})
export class AppModule { }
