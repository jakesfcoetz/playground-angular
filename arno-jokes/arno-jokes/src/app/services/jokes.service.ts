import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from 'rxjs';
import { joke } from '../components/jokes/joke';

@Injectable({
  providedIn: 'root'
})
export class JokesService {
  readonly url="https://v2.jokeapi.dev/joke/Any";
  

  constructor(private http:HttpClient) { 
    
  }

  getJokeFromServer() :Observable<joke[]>{
return this.http.get<joke[]>(this.url)
  }
}
