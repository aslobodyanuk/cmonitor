import { Injectable } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { AnimationState } from './animationState'

@Injectable({
  providedIn: 'root'
})
export class AnimationService {

  isFirstAnimation: boolean = true;
  state: AnimationState = AnimationState.still;

  constructor(private router: Router) {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {

        if (this.isFirstAnimation) {
          this.isFirstAnimation = false;
          return;
        }

        this.state = AnimationState.animated;
      }
    });
  }

  completeAnimaiton() {
    switch (this.state) {
      case AnimationState.animated: {
        this.state = AnimationState.still;
        break;
      }
    }
  }
}
