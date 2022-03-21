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
  newUrl?: string = '';

  private categorySource = new Subject<string>();
  componentCategory$ = this.categorySource.asObservable();

  constructor(private http: HttpClient) {}

  jokeCategoryChange(message: any) {
    this.categorySource.next(message);
  }
  getJokeFromServer(): Observable<JokeI> {
    let params = new HttpParams().set('contains', '');
    return this.http.get<JokeI>(this.url + '/' + this.categorySource, { params });
    console.log(this.http.get<JokeI>(this.url + '/' + this.categorySource, { params }));
  }
}
