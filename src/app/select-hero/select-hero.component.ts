import { Component, OnInit } from '@angular/core';
import { SelectHeroService } from 'app/select-hero/select-hero.service';


@Component({
  selector: 'app-select-hero',
  templateUrl: './select-hero.component.html',
  styleUrls: ['./select-hero.component.css'],
  providers: [SelectHeroService]
})
export class SelectHeroComponent implements OnInit {

  heroesData: any;
  constructor(private selectHeroService: SelectHeroService) { }


getStrAndDire() {
     this.selectHeroService.getAllHeroes()
      .subscribe(
        (response) => {  this.heroesData = response;
                       } ,
        (error) => console.log('error' + error)
      );
}

divideSide(side, type, hero) {
  // console.log(hero);
  if (hero.value.team === side && hero.value.primary_attr === type) {
    return hero ;
  }else {
    console.log('eiei');
    return '' ;
  }

}



  ngOnInit() {
   this.getStrAndDire();

}

}