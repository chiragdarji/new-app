import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {ErrorComponent} from './alert/error/error.component'
import {WarningComponent} from './alert/warning/warning.component';

@NgModule({
  declarations: [
    AppComponent,
    ErrorComponent,
    WarningComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
