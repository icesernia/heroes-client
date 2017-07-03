import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable()
export class HeroInfoService {
  constructor(private http: Http) {}

  getHeroByID(id) {
    let path = "http://45.76.148.9:3000/heroes" + id;
    return this.http.get(path);
  }
}
