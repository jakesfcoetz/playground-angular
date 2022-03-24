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
  jokeCategories: any = 'Any';

  constructor(private JokesService: JokesService) {}

  ngOnInit(): void {}

  getJokeCategories(data: string) {
    this.jokeCategories = data;
  }

  getJoke() {
    this.JokesService.getJokeFromServer(this.jokeCategories, this.jokeTextBox).subscribe((response) => {
      this.joke = response;
      this.jokeArray.splice(2, 1);
      if (this.joke.error == true) {
        this.jokeArray.push('No joke found...');
      } else {
        if (this.joke.type == 'single' && this.joke.joke) {
          this.jokeArray.push((this.jokeText = this.joke.joke));
        } else if (this.joke.type == 'twopart' && this.joke.delivery) {
          this.jokeArray.push((this.jokeText = this.joke.setup + '  ' + this.joke.delivery));
        }
      }
      this.jokeArray.reverse();
    });
  }
}
