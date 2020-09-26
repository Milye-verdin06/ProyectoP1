import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { APP_ROUTING } from './app.routes';
import { AppComponent } from './app.component';
import { SidebarComponent } from './components/shared/sidebar/sidebar.component';
import { TopbarComponent } from './components/topbar/topbar.component';
import { HomeComponent } from './components/body/home/home.component';
import { FooterComponent } from './components/footer/footer.component';
import { ButtonsComponents } from './components/body/buttons/buttons.component';
import { CardsComponent } from './components/body/cards/cards.component';
import { ColorsComponent } from './components/body/colors/colors.component';
import { BorderComponent } from './components/body/borders/border.component';
import { AnimaComponent } from './components/body/animations/anima.component';
import { OtherComponent } from './components/body/other/other.component';
import { ChartComponent } from './components/body/charts/chart.componen';
import { TableComponent } from './components/body/tables/tables.component';
import {FoundComponent} from './components/body/404/404.component';
import { BlankComponent } from './components/body/blank/blank.component';
import { FormsModule } from '@angular/forms';
import { AppService } from './services/app.services';
@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    TopbarComponent,
    HomeComponent,
    FooterComponent,
    ButtonsComponents,
    CardsComponent,
    ColorsComponent,
    BorderComponent,
    AnimaComponent,
    OtherComponent,
    ChartComponent,
    TableComponent,
    FoundComponent,
    BlankComponent
  ],
  //imports: [BrowserModule, APP_ROUTING],
  imports: [BrowserModule,  APP_ROUTING, FormsModule],
  providers: [AppService],
  bootstrap: [AppComponent]
})
export class AppModule { }
