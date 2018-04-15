import { Component, OnInit } from '@angular/core'
import { AppService } from '../../providers/app.service'

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.sass']
})
export class PortfolioComponent implements OnInit {
  portfolioData: any
  constructor(private appService: AppService) {}

  ngOnInit() {
    this.appService.fetchData('portfolio').subscribe(
      data => {
        this.portfolioData = data
      },
      error => console.log(error),
      () => {
        setTimeout(() => {
          this.showPortfolio()
        }, 100)
      }
    )
  }

  showPortfolio() {
    const singlePortfolio = document.querySelectorAll('.portfolio-single')
    Array.from(singlePortfolio).forEach((e, i) => {
      setTimeout(() => {
        return e.classList.add('animate-in')
      }, i * 250 + 400)
    })
  }
}
