import { JokesService } from './../../services/jokes.service';
import { Component, OnInit, EventEmitter } from '@angular/core';
import { JokeI } from './joke';

@Component({
  selector: 'app-jokes',
  templateUrl: './jokes.component.html',
  styleUrls: ['./jokes.component.scss'],
})
export class JokesComponent implements OnInit {
  jokeText: string = '';
  joke?: JokeI;
  jokeArray: string[] = [];
  jokeTextBox: string = '';
  jokeCategories: string = '';

  constructor(private JokesService: JokesService) {}

  ngOnInit(): void {}

  getJokeCategories(jokeCategories: string) {
    console.log(this.JokesService.jokeCategoryChange(jokeCategories));
    console.log(jokeCategories);
  }

  getJoke() {
    this.JokesService.jokeServiceText?.subscribe((data) => (data = this.jokeTextBox));
    this.JokesService.getJokeFromServer().subscribe((response) => {
      this.joke = response;
      this.jokeArray.splice(2, 1);
      if (this.joke.type == 'single' && this.joke.joke) {
        this.jokeArray.push((this.jokeText = this.joke.joke));
      } else if (this.joke.type == 'twopart' && this.joke.delivery) {
        this.jokeArray.push((this.jokeText = this.joke.setup + '  ' + this.joke.delivery));
      }
      this.jokeArray.reverse();
    });
  }
}
