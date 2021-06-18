import { animation, style, animate, trigger, transition, useAnimation, state } from '@angular/animations';

const ANIMATION_TRANSFORM: string = '20%';
const ANIMATION_OPACITY: string = '0';
const ANIMATION_TIME: string = '0.6s ease-out';

export const transformAnimation = animation([
  style({
    transform: 'translate({{ transform }})',
    opacity: '{{ opacity }}'
  }),
  animate('{{ time }}')
]);

export const growInAnimationTrigger = trigger('growInAnimation', [
  state('0', style({
    opacity: '1'
  })),
  state('1', style({
    opacity: '1'
  })),
  transition('* => 1', [
    useAnimation(transformAnimation, {
      params: {
        transform: ANIMATION_TRANSFORM,
        opacity: ANIMATION_OPACITY,
        time: ANIMATION_TIME
      }
    }),
  ]),
  transition('void => *', [
    useAnimation(transformAnimation, {
      params: {
        transform: ANIMATION_TRANSFORM,
        opacity: ANIMATION_OPACITY,
        time: ANIMATION_TIME
      }
    }),
  ])
]);