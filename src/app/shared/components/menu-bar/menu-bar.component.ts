import { Component, OnInit } from '@angular/core';
import { MenuItem, PrimeIcons } from 'primeng/api';

@Component({
  selector: 'shared-menu-bar',
  templateUrl: './menu-bar.component.html',
  styles: [],
})
export class MenuBarComponent implements OnInit {
  menuItems: MenuItem[] = [];

  ngOnInit(): void {
    this.menuItems = [
      {
        label: 'Angular Pipes',
        icon: 'pi pi-desktop',
        items: [
          { label: 'Date and Text', icon: PrimeIcons.DESKTOP, routerLink: '' },
          {
            label: 'Numbers',
            icon: PrimeIcons.DOLLAR,
            routerLink: 'numeric-pipe',
          },
          {
            label: 'No Commons',
            icon: PrimeIcons.GLOBE,
            routerLink: 'uncommon-pipe',
          },
        ],
      },
      {
        label: 'Customs Pipes',
        icon: PrimeIcons.COG,
        items: [{ label: 'Others Elements', icon: PrimeIcons.COG }],
      },
    ];
  }
}
