import { AfterViewInit, Component } from '@angular/core';
import anime from 'animejs/lib/anime.es.js';

@Component({
  selector: 'maor-splashscreen',
  templateUrl: './maor-splashscreen.html',
  styleUrls: ['./maor-splashscreen.scss'],
})
export class MaorSplashScreenComponent implements AfterViewInit {
  ngAfterViewInit(): void {
    const screenHeight = window.innerHeight;
    anime({
      targets: ['.maor__logo'],
      translateY: [
        {
          value: -screenHeight / 2 - 100,
          duration: 3000,
        },
        {
          value: -screenHeight / 2 - 150,
          duration: 400,
          easing: 'easeOutExpo',
        },
        { value: -screenHeight / 2 + 50, duration: 400 },
      ],
    });
    anime({
      targets: ['.maor__right__wing'],
      rotateZ: '50deg',
      loop: 6,
      direction: 'alternate',
      duration: 500,
      easing: 'easeOutExpo',
      complete: function () {
        anime({
          targets: ['.maor__right__wing'],
          translateX: '100vw',
          duration: 800,
          easing: 'easeInOutSine',
        });
      },
    });
    anime({
      targets: ['.maor__left__wing'],
      rotateZ: '50deg',
      loop: 6,
      direction: 'alternate',
      duration: 500,
      easing: 'easeOutExpo',
      complete: function () {
        anime({
          targets: ['.maor__left__wing'],
          translateX: '100vw',
          duration: 800,
          easing: 'easeInOutSine',
        });
      },
    });
    anime({
      targets: ['.maor__logo__title'],
      opacity: 1,
      delay: 3500,
      duration: 6000,
    });
  }
}
