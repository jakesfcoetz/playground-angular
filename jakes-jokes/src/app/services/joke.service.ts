import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError, Observable, of } from 'rxjs';
import { jokeApiC, JokeRequestParamsI, JokeResponseI } from '../interfaces/joke';

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
    console.log(params);

    let endpoint: string = jokeApiC.url;
    let qParams: any = null;
    //--- Add URL params (/)
    if (Array.isArray(params?.urlParams?.category) && params?.urlParams?.category.length) {
      endpoint += '/' + params?.urlParams?.category.join(',');
    } else {
      endpoint += '/any';
    }
    //--- Add query params (?)
    if (params?.queryParams) {
      qParams = params.queryParams;
      console.log(qParams);

      //--- format blacklist flags array to comma separated string
      if (params?.queryParams?.blacklistFlags && Array.isArray(params.queryParams?.blacklistFlags) && params?.queryParams?.blacklistFlags.length) {
        qParams.blacklistFlags = qParams.blacklistFlags.join(',');
      }
    }

    console.log(endpoint);
    return this.http.get<JokeResponseI>(endpoint, qParams ? { params: qParams } : {}).pipe(catchError((err) => of(err)));
  }
}
