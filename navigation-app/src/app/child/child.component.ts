import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss'],
})
export class ChildComponent implements OnInit {
  childMessage = 'Hi Dad';

  @Input() public childHears?: string;

  @Output() childEvent: EventEmitter<string> = new EventEmitter();

  constructor() {}

  ngOnInit(): void {}

  public sendToParent() {
    this.childEvent.emit(this.childMessage);
  }
}
