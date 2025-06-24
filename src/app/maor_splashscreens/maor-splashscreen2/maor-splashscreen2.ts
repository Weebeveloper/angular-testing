import { AfterViewInit, Component } from '@angular/core';
import anime from 'animejs/lib/anime.es.js';

@Component({
  selector: 'maor-splashscreen2',
  templateUrl: './maor-splashscreen2.html',
  styleUrls: ['./maor-splashscreen2.scss'],
})
export class MaorSplashScreen2Component implements AfterViewInit {
  maorDollarGlow = false;

  ngAfterViewInit(): void {
    anime({
      targets: ['.maor__dollar__right__svg'],
      translateX: '-1000px',
      duration: 3000,
      easing: 'easeOutCubic',
      complete: () => {
        this.maorDollarGlow = true;
        // anime({
        //   delay: 1000,
        //   targets: ['.animation__container'],
        //   background:
        //     'linear-gradient(to right,rgba(185, 127, 233, 0.1), rgb(86, 174, 231, 0.1), rgb(0, 254, 226, 0.1))',
        //   duration: 6000,
        //   // easing: 'easeInQuad',
        // });
      },
    });
    anime({
      targets: ['.maor__dollar__left__svg'],
      translateX: '1000px',
      duration: 3000,
      easing: 'easeOutCubic',
    });
    anime({
      targets: ['.maor__logo__title'],
      opacity: 1,
      delay: 3500,
      duration: 6000,
    });
  }
}
