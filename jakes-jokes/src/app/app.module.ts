import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './components/nav/nav.component';
import { LandingComponent } from './components/landing/landing.component';
import { JokesComponent } from './components/jokes/jokes.component';

@NgModule({
  declarations: [AppComponent, NavComponent, LandingComponent, JokesComponent],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
