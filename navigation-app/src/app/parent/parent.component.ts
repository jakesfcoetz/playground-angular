import { MessageService } from './../../../../Arno-Hero/src/app/services/message.service';
import { MessageComponent } from './../../../../Arno-Hero/src/app/components/message/message.component';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.scss'],
})
export class ParentComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
