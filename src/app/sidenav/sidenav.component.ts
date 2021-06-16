import { Component, OnInit } from '@angular/core';
import { SidenavService } from '../services/sidenav/sidenav.service';
import { Router } from '@angular/router';
import { AuthenticationService } from '../services/authentication/authentication.service';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss']
})
export class SidenavComponent implements OnInit {

  constructor(public sidenavService: SidenavService, private router: Router, private authenticationService: AuthenticationService) {

  }

  ngOnInit(): void {
  }

  navigate(path: string) {
    this.sidenavService.close();
    this.router.navigateByUrl(path);
  }
}
