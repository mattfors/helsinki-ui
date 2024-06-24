import { Component } from '@angular/core';
import { Route, Router, RouterLink } from '@angular/router';
import { NgForOf } from '@angular/common';

@Component({
  selector: 'hel-menu',
  standalone: true,
  imports: [
    RouterLink,
    NgForOf
  ],
  templateUrl: './hel-menu.component.html',
  styleUrl: './hel-menu.component.scss'
})
export class HelMenuComponent {
  menuRoutes: Route[];

  constructor(router: Router) {
    this.menuRoutes = router.config.filter(r => r.data?.["showInMenu"]);
    //router.events.subscribe(t => console.log('router event', t))

  }
}
