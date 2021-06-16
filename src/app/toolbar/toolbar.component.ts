import { Component, Input, OnInit } from '@angular/core';
import { AuthenticationService } from '../services/authentication/authentication.service';
import { SidenavService } from '../services/sidenav/sidenav.service';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss']
})
export class ToolbarComponent implements OnInit {

  @Input() title?: string;

  constructor(public sidenavService: SidenavService, public authenticationService: AuthenticationService) {
    
  }

  ngOnInit(): void {
  }

}
