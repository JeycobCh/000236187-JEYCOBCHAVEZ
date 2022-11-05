import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { InscriptionsComponent } from './inscriptions/inscriptions.component';

@NgModule({
  declarations: [
    AppComponent,
    InscriptionsComponent,
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
