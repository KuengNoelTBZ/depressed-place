import { Component, OnInit } from '@angular/core';
import anime from 'animejs';

@Component({
  selector: 'c-mouse',
  templateUrl: './mouse.component.html',
  styleUrls: [ './mouse.component.scss' ]
})
export class MouseComponent implements OnInit {
  src: string = '/assets/images/mouse.svg';
  alt: string = 'mouse.svg';
  style: string[] = [];
  mouses_id: string = '';

  constructor() { }

  ngOnInit(): void {
    this.checkDate();
    this.initMouse();
    this.animationCycle();
  }

  checkDate(): void {
    const today = new Date();

    if (today.getDate() == 20 && today.getMonth() + 1 == 4) {
      this.src = '/assets/images/mouse-weed.svg';
      this.alt = 'mouse-weed.svg';
      this.style.push('color-weed');
    } else {
      this.style.push('color-normal');
    }
  }

  initMouse(): void {
    const mouses = document.querySelectorAll('[mouse]:not([id])');
    mouses[0].id = `mouse-${mouses.length}`;
    this.mouses_id = `mouse-${mouses.length}`;
  }

  animationCycle() {
    anime({
      targets: `#${this.mouses_id}`,
      translateY: [0, 25, 0],
      duration: 5000,
      loop: true,
    });
  }

}
