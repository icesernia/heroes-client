import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { LoginComponent } from './login/login.component';
import { SelectHeroComponent } from './select-hero/select-hero.component';
import { HeroInfoComponent } from './hero-info/hero-info.component';
import { HeroDetailsComponent } from './hero-info/hero-details/hero-details.component';
import { HeroStatisticsComponent } from './hero-info/hero-statistics/hero-statistics.component';

const appRoutes: Routes = [
  { path: '' , component: SelectHeroComponent },
  { path: 'hero/:id',
    component: HeroInfoComponent,
    children: [
      { path: 'details', component:  HeroDetailsComponent },
      { path: 'statistics', component:  HeroStatisticsComponent }
    ]
  },
  { path: 'login', component: LoginComponent },
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
