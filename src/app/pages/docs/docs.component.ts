import { Component, OnInit } from '@angular/core';
import anime from 'animejs';

@Component({
  selector: 'p-docs',
  templateUrl: './docs.component.html',
  styleUrls: [ './docs.component.scss' ]
})
export class DocsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    anime({
      targets: 'c-mouse',
      delay: 2500,
      duration: 2000,
      opacity: [0, 1],
    });
  }

}
