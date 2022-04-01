/**
 * @file          joke-display.component
 * @description   Displays a single joke
 */

import { Component, Input, OnInit } from '@angular/core';
//--- Interfaces
import { JokeResponseI, TypeJokeNotFoundI, TypeSinglePartJokeI, TypeTwoPartJokeI } from 'src/app/interfaces/joke.interfaces';

@Component({
  selector: 'app-joke-display',
  templateUrl: './joke-display.component.html',
  styleUrls: ['./joke-display.component.scss'],
})
export class JokeDisplayComponent implements OnInit {
  @Input() joke?: JokeResponseI;
  jokeDisplay?: {
    onePart: string | null;
    twoPart: {
      setup: string;
      delivery: string;
    } | null;
    error: string | null;
  };

  /**----------------------------------------------------------------
   * @name          ngOnInit
   * @description   Update joke with incoming data
   */
  ngOnInit(): void {
    if (this.joke?.error) {
      this.jokeDisplay = {
        onePart: null,
        twoPart: null,
        error: (this.joke as TypeJokeNotFoundI).message,
      };
    } else if (this.joke?.type == 'single') {
      this.jokeDisplay = {
        onePart: (this.joke as TypeSinglePartJokeI).joke,
        twoPart: null,
        error: null,
      };
    } else {
      this.jokeDisplay = {
        onePart: null,
        twoPart: {
          setup: (this.joke as TypeTwoPartJokeI).setup,
          delivery: (this.joke as TypeTwoPartJokeI).delivery,
        },
        error: null,
      };
    }
  }
}
