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
  constructor(private route: ActivatedRoute, private heroInfoService: HeroInfoService) { }

  ngOnInit() {
    this.route.params
      .subscribe(
        (params: Params) => {
          this.id = params['id'];
          this.heroInfoService.getHeroByID(this.id)
            .subscribe(
              (resp) => console.log(resp),
              (error) => console.log(error)
            );
        }
      )
  }

}
