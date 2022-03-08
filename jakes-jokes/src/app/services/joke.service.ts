import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError, Observable, of } from 'rxjs';
import { jokeApiC, JokeRequestParamsI, JokeResponseI } from '../interfaces/joke.interfaces';

@Injectable({
  providedIn: 'root',
})
export class JokeService {
  /**----------------------------------------------------------------
   * @name  Constructor
   */
  constructor(private readonly http: HttpClient) {}

  /**----------------------------------------------------------------
   * @name        getJoke
   * @description GET joke HTTP call
   * @param       {JokeRequestParamsI} params? (optional) either url or query parameters
   * @returns     {JokeResponseI} Observable
   */
  getJoke(params?: JokeRequestParamsI): Observable<JokeResponseI> {
    console.log('params:', params);

    let endpoint: string = jokeApiC.url;
    //--- Add URL params (/)
    if (Array.isArray(params?.category) && params?.category.length) {
      endpoint += '/' + params?.category.join(',');
    } else {
      endpoint += '/any';
    }
    return this.http
      .get<JokeResponseI>(endpoint, params?.contains ? { params: { contains: params.contains } } : {})
      .pipe(catchError((err) => of(err)));
  }
}
