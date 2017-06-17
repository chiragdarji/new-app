import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ErrorComponent } from './alert/error/error.component'
import { WarningComponent } from './alert/warning/warning.component';
import { ServersComponent } from './servers/servers.component';
import { ServerComponent } from './server/server.component';
import { GameControlComponent } from './game-control/game-control.component';
import { OddComponent } from './odd/odd.component';
import { EvenComponent } from './even/even.component'

@NgModule({
  declarations: [
    AppComponent,
    ErrorComponent,
    WarningComponent,
    ServersComponent,
    ServerComponent,
    GameControlComponent,
    OddComponent,
    EvenComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
