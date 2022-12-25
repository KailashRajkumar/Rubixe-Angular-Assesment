import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { MenuBarComponent } from './menu-bar/menu-bar.component';
import { CarouselComponent } from './carousel/carousel.component';
import { WhoWeAreComponent } from './who-we-are/who-we-are.component';
import { WhereWeStartedComponent } from './where-we-started/where-we-started.component';
import { TechForTeensComponent } from './tech-for-teens/tech-for-teens.component';
import { GetInTouchComponent } from './get-in-touch/get-in-touch.component';
import { FooterComponent } from './footer/footer.component';
import { LogoComponent } from './menu-bar/logo/logo.component';
import { NavItemsComponent } from './menu-bar/nav-items/nav-items.component';
import { AboutusComponent } from './footer/aboutus/aboutus.component';
import { MenusComponent } from './footer/menus/menus.component';
import { LearnmoreComponent } from './footer/learnmore/learnmore.component';
import { AddressComponent } from './footer/address/address.component';
import { CopywriteComponent } from './copywrite/copywrite.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuBarComponent,
    CarouselComponent,
    WhoWeAreComponent,
    WhereWeStartedComponent,
    TechForTeensComponent,
    GetInTouchComponent,
    FooterComponent,
    LogoComponent,
    NavItemsComponent,
    AboutusComponent,
    MenusComponent,
    LearnmoreComponent,
    AddressComponent,
    CopywriteComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
