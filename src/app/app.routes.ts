import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/body/home/home.component';
import { SidebarComponent } from './components/shared/sidebar/sidebar.component';
import { TopbarComponent } from './components/topbar/topbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { ButtonsComponents } from './components/body/buttons/buttons.component';
import { CardsComponent } from './components/body/cards/cards.component';
import { ColorsComponent } from './components/body/colors/colors.component'
import { BorderComponent } from './components/body/borders/border.component';
import { AnimaComponent } from './components/body/animations/anima.component';
import { OtherComponent } from './components/body/other/other.component';
import { ChartComponent } from './components/body/charts/chart.componen';
import { TableComponent } from './components/body/tables/tables.component';
import { FoundComponent } from './components/body/404/404.component';
import { BlankComponent } from './components/body/blank/blank.component';
const APP_ROUTES: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'buttons', component: ButtonsComponents },
  { path: 'cards', component: CardsComponent },
  { path: 'colors', component: ColorsComponent },
  { path: 'border', component: BorderComponent },
  { path: 'anima', component: AnimaComponent },
  { path: 'other', component: OtherComponent },
  { path: 'charts', component: ChartComponent },
  { path: 'tables', component: TableComponent },
  { path: '404', component: FoundComponent },
  { path: 'blank', component: BlankComponent },
  { path: '**', pathMatch: 'full', redirectTo: 'home' }
];

export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES);