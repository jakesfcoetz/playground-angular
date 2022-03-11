import { Component, OnInit, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.scss'],
})
export class ParentComponent implements OnInit {
  parentMessage = 'Hi Son';
  childMessage?: string;
  constructor() {}

  ngOnInit(): void {}

  setToParent(data: string | undefined) {
    this.childMessage = data;
  }
}
