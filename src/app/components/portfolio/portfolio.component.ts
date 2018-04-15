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
    this.appService.fetchPortfolio().subscribe(data => {
      this.portfolioData = data
      console.log(this.portfolioData)
    })
  }
}
