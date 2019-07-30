import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MenuPageComponent } from './menu-page/menu-page.component';
import { AppRoutingModule } from './app-routing.module';
import { NavbarHeaderComponent } from './common-components/navbar-header/navbar-header.component';
import { InfoFooterComponent } from './common-components/info-footer/info-footer.component';
import { GunInfoComponent } from './pages/gun-info/gun-info.component';
import { GetRangeTipsComponent } from './pages/get-range-tips/get-range-tips.component';
import { SkillGuideComponent } from './pages/skill-guide/skill-guide.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuPageComponent,
    NavbarHeaderComponent,
    InfoFooterComponent,
    GunInfoComponent,
    GetRangeTipsComponent,
    SkillGuideComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
