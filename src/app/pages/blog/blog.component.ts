import { Component, OnInit } from '@angular/core';
import anime from 'animejs';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: [ './blog.component.scss' ]
})
export class BlogComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    anime({
      targets: '#mouse',
      translateY: [0, 25, 0],
      duration: 5000,
      loop: true,
    });
  }

}
