import { BrowserModule } from '@angular/platform-browser'
import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'
import { ParticlesModule } from 'angular-particle'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'

import { AppComponent } from './app.component'
import { AboutComponent } from './components/about/about.component'
import { PortfolioComponent } from './components/portfolio/portfolio.component'
import { ContactComponent } from './components/contact/contact.component'
import { MenuComponent } from './components/menu/menu.component'
import { AppService } from './providers/app.service'

const routes: Routes = [
  {
    path: '',
    component: AboutComponent,
    data: { page: 'about' }
  },
  {
    path: 'portfolio',
    component: PortfolioComponent,
    data: { page: 'portfolio' }
  },
  {
    path: 'contact',
    component: ContactComponent,
    data: { page: 'contact' }
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
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    ParticlesModule,
    BrowserAnimationsModule
  ],
  providers: [AppService],
  bootstrap: [AppComponent]
})
export class AppModule {}
