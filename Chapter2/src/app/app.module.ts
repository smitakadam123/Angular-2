import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ContentProjectionComponent } from './content-projection/content-projection.component';

@NgModule({
  declarations: [
    AppComponent,
    ContentProjectionComponent,
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
