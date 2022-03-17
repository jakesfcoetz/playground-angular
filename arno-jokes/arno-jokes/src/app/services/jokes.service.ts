import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { JokeI } from '../components/jokes/joke';

@Injectable({
  providedIn: 'root',
})
export class JokesService {
  readonly url = 'https://v2.jokeapi.dev/joke/Any';

  constructor(private http: HttpClient) {}

  getJokeFromServer(): Observable<JokeI> {
    return this.http.get<JokeI>(this.url);
  }
}
