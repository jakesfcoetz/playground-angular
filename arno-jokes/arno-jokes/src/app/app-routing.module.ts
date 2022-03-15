import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { JokesComponent } from './components/jokes/jokes.component';
import { WelcomeComponent } from './components/welcome/welcome.component';

const routes: Routes = [
{path:'jokes', component: JokesComponent},
{path:'menu', component: WelcomeComponent},
{path:'', component: WelcomeComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
