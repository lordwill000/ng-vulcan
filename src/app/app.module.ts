import { BrowserModule } from '@angular/platform-browser'
import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'
import { ParticlesModule } from 'angular-particle'

import { AppComponent } from './app.component'
import { AboutComponent } from './components/about/about.component'
import { PortfolioComponent } from './components/portfolio/portfolio.component'
import { ContactComponent } from './components/contact/contact.component';
import { MenuComponent } from './components/menu/menu.component'

const routes: Routes = [
  {
    path: '',
    component: AboutComponent
  },
  {
    path: 'portfolio',
    component: PortfolioComponent
  },
  {
    path: 'contact',
    component: ContactComponent
  }
]

@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    PortfolioComponent,
    ContactComponent,
    MenuComponent
  ],
  imports: [BrowserModule, RouterModule.forRoot(routes), ParticlesModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
