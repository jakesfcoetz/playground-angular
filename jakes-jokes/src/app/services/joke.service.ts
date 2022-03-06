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
    let endpoint: string = jokeApiC.url;
    //--- Add URL params (/)
    if (Array.isArray(params?.urlParams?.category) && params?.urlParams?.category.length) {
      endpoint += '/' + params?.urlParams?.category.join(',');
    }
    //--- Add query params (?)
    if (params?.queryParams) {
      // let qParams = new HttpParams();
      // Object.keys(params.queryParams).forEach((paramProp) => {
      //   if (paramProp == 'blacklistFlags' && Array.isArray(params.queryParams?.blacklistFlags) && params?.queryParams?.blacklistFlags.length) {
      //     qParams = qParams.append(paramProp, params.queryParams.blacklistFlags.join(','));
      //   } else {
      //     qParams = qParams.append(paramProp, params.queryParams[paramProp]);
      //   }
      // });
    }
    //--- Add default url param if none exists
    if (!params?.urlParams && !params?.queryParams) {
      endpoint = jokeApiC.url + '/any';
    }

    console.log(endpoint);
    return this.http.get<JokeResponseI>(endpoint).pipe(catchError((err) => of(err)));
  }
}
