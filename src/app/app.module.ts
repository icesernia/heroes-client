import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { SelectHeroComponent } from './select-hero/select-hero.component';
import { HeroInfoComponent } from './hero-info/hero-info.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { HeroComponent } from './select-hero/hero/hero.component';
import { AppRoutingModule } from './app-routing.module';
import { HeroInfoService } from './hero-info/hero-info.service';
import { KeysPipe } from './keypipes.pipe';
import { HeroDetailsComponent } from './hero-info/hero-details/hero-details.component';
import { HeroStatisticsComponent } from './hero-info/hero-statistics/hero-statistics.component';
import { SeleceHeroPipe } from './select-hero/selece-hero.pipe';
import { SearchPageComponent } from './select-hero/search-page/search-page.component';
import { RegisterComponent } from './login/register/register.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SelectHeroComponent,
    HeroInfoComponent,
    NavBarComponent,
    HeroComponent,
    KeysPipe,
    HeroDetailsComponent,
    HeroStatisticsComponent,
    SeleceHeroPipe,
    SearchPageComponent
    HeroComponent,
    RegisterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpModule
  ],
  providers: [HeroInfoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
