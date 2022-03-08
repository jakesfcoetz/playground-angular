/**
 * @file          jokes.component
 * @description   Contains the landing page for /jokes
 */

import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
//--- Service
import { JokeService } from 'src/app/services/joke.service';
import { jokeApiC } from 'src/app/interfaces/joke';

@Component({
  selector: 'app-jokes',
  templateUrl: './jokes.component.html',
  styleUrls: ['./jokes.component.scss'],
})
export class JokesComponent {
  //--- Form
  jokeForm: FormGroup;
  //--- Available filters
  availableCategories = jokeApiC.categories;
  //--- Joke list
  jokeHistory: any[] = [];

  /**----------------------------------------------------------------
   * @name  Constructor
   */
  constructor(private formBuilder: FormBuilder, private jokeService: JokeService) {
    this.jokeForm = this.formBuilder.group({
      category: ['Any'],
      contains: [null],
    });
  }

  /**----------------------------------------------------------------
   * @name          getJoke
   * @description   Get joke from API
   */
  getJoke() {
    this.jokeService
      .getJoke({
        category: this.jokeForm.controls['category'].value,
        ...(this.jokeForm.controls['contains'].value ? { contains: this.jokeForm.controls['contains'].value } : {}),
      })
      .subscribe((joke) => {
        this.jokeHistory = [joke, ...this.jokeHistory];
      });
  }
}
