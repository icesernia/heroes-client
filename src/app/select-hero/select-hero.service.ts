import { Injectable } from '@angular/core';
import { environment } from "environments/environment";
import { Http, Response } from '@angular/http';
import 'rxjs/Rx';
@Injectable()
export class SelectHeroService {

  constructor(private http:Http) { }


getAllHeroes() {
  return this.http.get(environment.URL + '/heroes').map(
        (res: Response) => {
        const data = res.json();
        return data;
      });
  }
  
}




