import { JokesService } from './../../services/jokes.service';
import { Component, OnInit } from '@angular/core';
import { joke } from './joke';

@Component({
  selector: 'app-jokes',
  templateUrl: './jokes.component.html',
  styleUrls: ['./jokes.component.scss']
})
export class JokesComponent implements OnInit {
  joke:joke;
  
constructor( private JokesService:JokesService) {}

  ngOnInit(): void {
  }

  getJoke(){
    this.JokesService.getJokeFromServer().subscribe(response =>
    this.joke = response
      );
      console.log(Response)
  }
}
