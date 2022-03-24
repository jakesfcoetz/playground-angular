import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable, Subject } from 'rxjs';
import { JokeI } from '../components/jokes/joke';

@Injectable({
  providedIn: 'root',
})
export class JokesService {
  jokeServiceText?: Observable<string>;
  url = '';
  newUrl?: string = '';

  private categorySource = new Subject<string>();
  componentCategory$ = this.categorySource.asObservable();

  constructor(private http: HttpClient) {}

  jokeCategoryChange(message: string) {
    this.url = 'https://v2.jokeapi.dev/joke/' + this.categorySource.next(message);
    // console.log(this.categorySource);
  }
  getJokeFromServer(): Observable<JokeI> {
    let params = new HttpParams().set('contains', '');
    return this.http.get<JokeI>(this.url, { params });
    console.log(this.http.get<JokeI>(this.url, { params }));
  }
}
