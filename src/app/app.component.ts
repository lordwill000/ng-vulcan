import { Component } from '@angular/core'
import {
  transition,
  trigger,
  query,
  style,
  animate,
  group,
  animateChild
} from '@angular/animations'
import { RouterOutlet } from '@angular/router'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass'],
  animations: [
    trigger('animRoutes', [
      transition('* <=> *', [
        group([
          query(
            ':enter',
            [
              style({
                opacity: 0
              }),
              animate('1s', style({ opacity: 1 })),
              animateChild()
            ],
            { optional: true }
          ),
          query(
            ':leave',
            [animate('2s', style({ opacity: 0 })), animateChild()],
            { optional: true }
          )
        ])
      ])
    ])
  ]
})
export class AppComponent {
  getPage(outlet) {
    return outlet.activatedRouteData['page'] || 'about'
  }
}
