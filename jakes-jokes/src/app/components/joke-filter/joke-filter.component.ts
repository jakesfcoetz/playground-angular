/**
 * @file          joke-filter.component
 * @description   Contains all elements pertaining to the joke filter
 */

import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { jokeApiC } from 'src/app/interfaces/joke';
//--- Service
import { JokeService } from 'src/app/services/joke.service';

@Component({
  selector: 'app-joke-filter',
  templateUrl: './joke-filter.component.html',
  styleUrls: ['./joke-filter.component.scss'],
})
export class JokeFilterComponent {
  //--- Form
  jokeForm: FormGroup;
  //--- Content constants
  availableCategories = jokeApiC.categories;
  availableBlacklistFlags = jokeApiC.blacklistFlags;
  availableTypes = jokeApiC.types;

  /**----------------------------------------------------------------
   * @name  Constructor
   */
  constructor(private formBuilder: FormBuilder, private jokeService: JokeService) {
    this.jokeForm = this.formBuilder.group({
      category: [null],
      blacklistFlags: [null],
      type: [null],
      contains: [null],
    });
  }

  /**----------------------------------------------------------------
   * @name          getJoke
   * @description   Get joke from API
   */
  getJoke(): void {
    this.jokeService
      .getJoke({
        queryParams: {
          //---<> checkboxes not being populated correctly
          ...(this.jokeForm.controls['blacklistFlags'].value ? { blacklistFlags: this.jokeForm.controls['blacklistFlags'].value } : {}),
          ...(this.jokeForm.controls['type'].value ? { type: this.jokeForm.controls['type'].value } : {}),
          ...(this.jokeForm.controls['contains'].value ? { contains: this.jokeForm.controls['contains'].value } : {}),
        },
      })
      .subscribe((joke) => {
        if (!joke.error) {
          console.log('RES:', joke);
        }
      });
  }
}
