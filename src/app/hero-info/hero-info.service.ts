import { Injectable } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';
import 'rxjs/Rx';

@Injectable()
export class HeroInfoService {

  constructor(private http: Http) {}

  getHeroByID(id) {
    const header = new Headers({'Content-Type': 'application/json'});
    let path = "http://45.76.148.9:3000/heroes/" + id;
    // let path = "http://localhost:3000/heroes/" + id;
    console.log('path is ' + path);
    return this.http.get(path)
      .map(
        (res: Response) => {
        const data = res.json();
        return data;
      });
  }
}
