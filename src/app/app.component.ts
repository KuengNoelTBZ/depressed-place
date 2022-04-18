import { Component } from '@angular/core';
import anime from 'animejs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.scss' ]
})
export class AppComponent {

  constructor() { }

  ngOnInit(): void {
    anime({
      targets: 'main',
      delay: 1500,
      duration: 2000,
      opacity: [0, 1],
    });
  }

}
