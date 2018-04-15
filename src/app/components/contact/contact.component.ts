import { Component, OnInit } from '@angular/core'
import { AppService } from '../../providers/app.service'

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.sass']
})
export class ContactComponent implements OnInit {
  socialData: any

  constructor(private appService: AppService) {}

  ngOnInit() {
    this.appService.fetchData('socials').subscribe(
      data => {
        this.socialData = data
        console.log(this.socialData)
      },
      error => console.log(error)
    )
  }
}
