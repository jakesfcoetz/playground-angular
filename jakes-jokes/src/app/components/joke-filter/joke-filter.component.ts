/**
 * @file          joke-filter.component
 * @description   Contains all elements pertaining to the joke filter
 */

import { Component, OnInit } from '@angular/core';
//--- Service
import { JokeService } from 'src/app/services/joke.service';

@Component({
  selector: 'app-joke-filter',
  templateUrl: './joke-filter.component.html',
  styleUrls: ['./joke-filter.component.scss'],
})
export class JokeFilterComponent implements OnInit {
  /**----------------------------------------------------------------
   * @name  Constructor
   */
  constructor(private jokeService: JokeService) {}

  /**----------------------------------------------------------------
   * @name          ngOnInit
   * @description   Update various values on start-up
   */
  ngOnInit(): void {
    this.jokeService.getJoke().subscribe((joke) => {
      if (!joke.error) {
        console.log('RES:', joke);
      }
    });
  }
}
