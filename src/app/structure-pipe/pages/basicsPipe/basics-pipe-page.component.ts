import { Component } from '@angular/core';

@Component({
  selector: 'basics-pipe-pages',
  templateUrl: './basics-pipe-page.component.html',
})
export class BasicsPipePagesComponent {
  firstName: string = 'German';
  lastName: string = 'Alvarez';
  fullName: string = 'GeRmaN AlVaReZ';
}
