import { Injectable } from '@angular/core';
import { HttpClientModule } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class JokesService {
  // url="https://top-funny-jokes.com/";
  // joke:any;

  constructor(private http:HttpClientModule) { }

  // getJoke(){
  //   this.joke = this.http.get(this.url);
  // }
}
