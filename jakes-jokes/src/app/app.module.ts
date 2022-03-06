//--- Modules
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
//--- Components
import { AppComponent } from './app.component';
import { NavComponent } from './components/nav/nav.component';
import { LandingComponent } from './pages/landing/landing.component';
import { JokesComponent } from './pages/jokes/jokes.component';
import { JokeFilterComponent } from './components/joke-filter/joke-filter.component';
import { JokeDisplayComponent } from './components/joke-display/joke-display.component';

@NgModule({
  declarations: [AppComponent, NavComponent, LandingComponent, JokesComponent, JokeFilterComponent, JokeDisplayComponent],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule, ReactiveFormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
