import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { LoginComponent } from './login/login.component';
import { SelectHeroComponent } from './select-hero/select-hero.component';
import { HeroInfoComponent } from './hero-info/hero-info.component';

const appRoutes: Routes = [
  { path: '' , component: SelectHeroComponent },
  { path: 'hero/:id', component: HeroInfoComponent },
  { path: 'login', component: LoginComponent}
];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
