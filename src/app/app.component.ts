import { Component, OnInit } from '@angular/core';
import { AnimationService } from './services/animation/animation.service';
import { growInAnimationTrigger } from './services/animation/growInAnimation';
import { AuthenticationService } from './services/authentication/authentication.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [
    growInAnimationTrigger
  ]
})
export class AppComponent implements OnInit {
  title = 'CMonitor';
  
  constructor(public authenticationService: AuthenticationService, public animationService: AnimationService) {
  }

  ngOnInit(): void {
  }

  animationDone() {
    this.animationService.completeAnimaiton();
  }
}
