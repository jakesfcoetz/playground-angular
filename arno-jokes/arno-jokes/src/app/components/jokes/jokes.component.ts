import { JokesService } from './../../services/jokes.service';
import { Component, OnInit } from '@angular/core';
import { JokeI } from './joke';

@Component({
  selector: 'app-jokes',
  templateUrl: './jokes.component.html',
  styleUrls: ['./jokes.component.scss'],
})
export class JokesComponent implements OnInit {
  jokeText: string = '';
  joke?: JokeI;
  jokeA: string[] = [];
  constructor(private JokesService: JokesService) {}

  ngOnInit(): void {}

  getJoke() {
    this.JokesService.getJokeFromServer().subscribe((response) => {
      this.joke = response;
      this.jokeA.splice(2, 1);
      if (this.joke.type == 'single' && this.joke.joke) {
        this.jokeA.push((this.jokeText = this.joke.joke));
      } else if (this.joke.type == 'twopart' && this.joke.delivery) {
        this.jokeA.push((this.jokeText = this.joke.setup + '  ' + this.joke.delivery));
      }
      this.jokeA.reverse();
    });
  }
}
