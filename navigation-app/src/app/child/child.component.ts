import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss'],
})
export class ChildComponent implements OnInit {
  childMessage: string = 'Hello Koos';
  constructor() {}

  ngOnInit(): void {}
  childMessageChange() {
    this.childMessage = 'Hi DAD!';
  }
}
