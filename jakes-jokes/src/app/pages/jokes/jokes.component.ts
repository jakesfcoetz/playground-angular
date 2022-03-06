/**
 * @file          jokes.component
 * @description   Contains the landing page for /jokes
 */

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-jokes',
  templateUrl: './jokes.component.html',
  styleUrls: ['./jokes.component.scss'],
})
export class JokesComponent implements OnInit {
  /**----------------------------------------------------------------
   * @name  Constructor
   */
  constructor() {}

  /**----------------------------------------------------------------
   * @name          ngOnInit
   * @description   Update various values on start-up
   */
  ngOnInit(): void {}
}
