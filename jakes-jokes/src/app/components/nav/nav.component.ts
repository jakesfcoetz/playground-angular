/**
 * @file          nav.component
 * @description   Contains all the logic in the top navigation bar
 */

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss'],
})
export class NavComponent implements OnInit {
  buttons: { name: string; url: string }[] = [
    { name: 'Home', url: '/' },
    { name: 'Jokes', url: '/jokes' },
  ];

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
