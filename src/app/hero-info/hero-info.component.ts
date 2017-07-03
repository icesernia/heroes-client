import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { HttpModule } from '@angular/http';
import { HeroInfoService } from './hero-info.service';

@Component({
  selector: 'app-hero-info',
  templateUrl: './hero-info.component.html',
  styleUrls: ['./hero-info.component.css'],
  providers: []
})
export class HeroInfoComponent implements OnInit {
  id: number;
  hero: any;
  loadingHero: boolean;
  constructor(private route: ActivatedRoute, private heroInfoService: HeroInfoService) { }

  ngOnInit() {
    this.loadingHero = true;
    this.route.params
      .subscribe(
        (params: Params) => {
          this.id = params['id'];
          this.heroInfoService.getHeroByID(this.id)
            .subscribe(
              (resp) => {
                this.loadingHero = false;
                this.hero = resp;
                console.log(this.hero);
              },
              (error) => {
                this.loadingHero = false;
                console.log(error);
              }
            );
        }
      )
  }

  printProp(obj) {
    console.log(obj);
  }

}
