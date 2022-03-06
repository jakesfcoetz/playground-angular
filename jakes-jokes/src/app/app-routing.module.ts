import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
//--- Components
import { JokesComponent } from './components/jokes/jokes.component';
import { LandingComponent } from './components/landing/landing.component';

const routes: Routes = [
  { path: '', component: LandingComponent },
  { path: 'jokes', component: JokesComponent },
  { path: '**', redirectTo: '/' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
