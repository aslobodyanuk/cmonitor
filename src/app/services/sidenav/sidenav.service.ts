import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SidenavService {

  visible: boolean;

  constructor() {
    this.visible = false;
  }

  toggle(): boolean {
    this.visible = !this.visible;
    return this.visible;
  }

  close() {
    this.visible = false;
  }

  open() {
    this.visible = true;
  }
}
