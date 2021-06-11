import { Component, OnInit } from '@angular/core';
import { SidenavService } from '../services/sidenav/sidenav.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss']
})
export class SidenavComponent implements OnInit {

  constructor(public sidenavService: SidenavService, private router: Router) {
    
  }

  ngOnInit(): void {
  }

  navigate(path: string) {
    this.sidenavService.close();
    this.router.navigateByUrl(path);
  }
}
