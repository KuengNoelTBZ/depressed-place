import { Component, OnInit } from '@angular/core';
import anime from 'animejs';

@Component({
  selector: 'rain-drop',
  templateUrl: './rain-drop.component.html',
  styleUrls: [ './rain-drop.component.scss' ]
})
export class RainDropComponent implements OnInit {
  rain_drop_id: string = '';

  constructor() { }

  ngOnInit(): void {
    this.initRainDrop();
    this.setPositionX();
    this.animationCycle();
  }

  initRainDrop(): void {
    const rain_drops = document.getElementsByClassName('rain-drops');

    for (var i = 0; i < rain_drops.length; i++) {
      if (!rain_drops[i].id) {
        rain_drops[i].id = `rain-drop-${i}`;
        this.rain_drop_id = `rain-drop-${i}`;
        break;
      }
    }
  }

  animationCycle(): void {
    anime({
      targets: `#${this.rain_drop_id}`,
      translateY: window.innerHeight,
      delay: anime.random(0, 5000),
      duration: anime.random(2000, 3000),
      easing: 'easeInOutQuint',
      opacity: 0,
      complete: () => {
        anime.remove(`#${this.rain_drop_id}`);
        this.setPositionX();
        this.animationCycle();
      }
    });
  }

  setPositionX(): void {
    const rain_drop = document.getElementById(this.rain_drop_id);
    rain_drop?.setAttribute('style', `left: ${anime.random(0, window.innerWidth)}px`);
  }

}
