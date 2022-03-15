import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class JokesService {
  readonly url="https://v2.jokeapi.dev/";
  joke:any;

  constructor(private http:HttpClient) { 
    
  }

  getJokeFromServer(){
this.joke = this.http.get(this.url + "/joke/Programing")
  }
}
