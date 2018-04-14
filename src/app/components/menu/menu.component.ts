import { Component, OnInit } from '@angular/core'

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.sass']
})
export class MenuComponent implements OnInit {
  constructor() {}

  ngOnInit() {}

  openMenu() {
    document.querySelector('.menu-overlay').classList.toggle('active-menu')
    document.querySelector('.hamburger').classList.toggle('active-hamburg')
    const menuItems = document.querySelectorAll('.menu-item')
    Array.from(menuItems).forEach((e, i) => {
      setTimeout(() => {
        e.classList.toggle('fade-in-left')
      }, i * 250 + 400)
    })
  }
}
