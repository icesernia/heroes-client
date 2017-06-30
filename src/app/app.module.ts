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

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SelectHeroComponent,
    HeroInfoComponent,
    NavBarComponent,
    HeroComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
