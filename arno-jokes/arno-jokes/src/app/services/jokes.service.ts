import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable, Subject } from 'rxjs';
import { JokeI } from '../components/jokes/joke';

@Injectable({
  providedIn: 'root',
})
export class JokesService {
  jokeServiceText?: Observable<string>;
  url = 'https://v2.jokeapi.dev/joke/';

  constructor(private http: HttpClient) {}

  getJokeFromServer(jokeCategories: any, jokeContains: string): Observable<JokeI> {
    console.log(jokeCategories);
    console.log(jokeContains);
    let params = new HttpParams().set('contains', jokeContains);
    return this.http.get<JokeI>(this.url + jokeCategories, { params });
  }
}
