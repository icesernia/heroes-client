import { Component, OnInit } from '@angular/core';
import { SelectHeroService } from "app/select-hero/select-hero.service";


@Component({
  selector: 'app-select-hero',
  templateUrl: './select-hero.component.html',
  styleUrls: ['./select-hero.component.css'],
  providers:[SelectHeroService]
})
export class SelectHeroComponent implements OnInit {

  constructor(private selectHeroService: SelectHeroService) { }


getStrAndDire() {
     this.selectHeroService.getAllHeroes()
      .subscribe(
        (response) =>{ const heroesData = response;
                       console.log("data" + heroesData); } ,
        (error) => console.log('error' + error)
      );
}

 
  ngOnInit() {
   this.getStrAndDire();

}

}