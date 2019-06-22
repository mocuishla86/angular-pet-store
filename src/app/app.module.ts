import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PetComponent } from './pet/pet.component';
import { ApiModule, Configuration } from './typescript-angular-client';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    PetComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ApiModule.forRoot(() => new Configuration({apiKeys:{}})),
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
