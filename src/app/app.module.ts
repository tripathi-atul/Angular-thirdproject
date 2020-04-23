import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TestServiceService } from './test-service.service';
import { ViewModule } from './view/view.module';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ViewModule,
    HttpClientModule

  ],
  providers: [
    TestServiceService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
