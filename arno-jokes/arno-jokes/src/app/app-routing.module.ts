import { NavbarComponent } from './components/navbar/navbar.component';
import { AppComponent } from './app.component';
import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { JokesComponent } from './components/jokes/jokes.component';

const routes: Routes = [
{path:'jokes', component: JokesComponent},
{path:'menu', component: NavbarComponent},
{path:'', component:NavbarComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
