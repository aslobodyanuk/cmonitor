import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ApiConfigurationEntry } from '../models/apiConfigurationEntry';
import { NewApiConfigurationDialogComponent } from '../new-api-configuration-dialog/new-api-configuration-dialog.component';

@Component({
  selector: 'app-api-configuration-view',
  templateUrl: './api-configuration-view.component.html',
  styleUrls: ['./api-configuration-view.component.scss']
})
export class ApiConfigurationViewComponent implements OnInit {

  configValues: ApiConfigurationEntry[] = [
    {
      id: 1,
      key: "c9d2cfd5-1fcd-4378-ad26-127a2822b37a",
      active: true,
      created: new Date()
    },
    {
      id: 2,
      key: "b0330b3f-5de9-4181-8b91-a80866f1aa3c",
      active: false,
      created: new Date()
    },
    {
      id: 3,
      key: "358def78-48c8-41f6-836e-b1164d2530f6",
      active: true,
      created: new Date()
    },
    {
      id: 4,
      key: "9af47c14-c7ad-45bb-adeb-f10af8beb830",
      active: true,
      created: new Date()
    }
  ]

  constructor(private dialog: MatDialog) { }

  ngOnInit(): void {
  }

  openNewItemDialog() {
    this.dialog.open(NewApiConfigurationDialogComponent, {
      autoFocus: false
    });
  }
}
