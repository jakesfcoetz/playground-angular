import { JokesService } from './../../services/jokes.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-jokes',
  templateUrl: './jokes.component.html',
  styleUrls: ['./jokes.component.scss']
})
export class JokesComponent implements OnInit {

constructor( private JokesService:JokesService) {
}

  ngOnInit(): void {
  }

}
