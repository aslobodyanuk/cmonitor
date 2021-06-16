import { Component, OnInit } from '@angular/core';
import { Guid } from 'guid-typescript';

@Component({
  selector: 'app-new-api-configuration-dialog',
  templateUrl: './new-api-configuration-dialog.component.html',
  styleUrls: ['./new-api-configuration-dialog.component.scss']
})
export class NewApiConfigurationDialogComponent implements OnInit {

  key: string;
  active: boolean;

  constructor() {
    this.key = "";
    this.active = true;
  }

  ngOnInit(): void {
  }

  generateGuid() {
    this.key = Guid.create().toString();
  }
}
