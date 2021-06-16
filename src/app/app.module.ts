import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TemperatureTileComponent } from './temperature-tile/temperature-tile.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MDBBootstrapModule } from 'angular-bootstrap-md';

import { MatSliderModule } from '@angular/material/slider';
import { MatIconModule } from '@angular/material/icon'
import { MatCardModule } from '@angular/material/card'
import { MatGridListModule } from '@angular/material/grid-list'
import { MatDividerModule } from '@angular/material/divider';
import { LineChartComponent } from './line-chart/line-chart.component';
import { ToolbarComponent } from './toolbar/toolbar.component'
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { SidenavComponent } from './sidenav/sidenav.component';
import { MatListModule } from '@angular/material/list';
import { MatTableModule } from '@angular/material/table';
import { TableViewComponent } from './table-view/table-view.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { TemperatureDetailedViewComponent } from './temperature-detailed-view/temperature-detailed-view.component';
import { HumidityDetailedViewComponent } from './humidity-detailed-view/humidity-detailed-view.component';
import { LoginComponent } from './login/login.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { FormsModule } from '@angular/forms';
import { ApiConfigurationViewComponent } from './api-configuration-view/api-configuration-view.component';
import { NewApiConfigurationDialogComponent } from './new-api-configuration-dialog/new-api-configuration-dialog.component';
import { MatDialogModule } from '@angular/material/dialog'
import { MatCheckboxModule } from '@angular/material/checkbox'

@NgModule({
  declarations: [
    AppComponent,
    TemperatureTileComponent,
    LineChartComponent,
    ToolbarComponent,
    SidenavComponent,
    TableViewComponent,
    DashboardComponent,
    TemperatureDetailedViewComponent,
    HumidityDetailedViewComponent,
    LoginComponent,
    ApiConfigurationViewComponent,
    NewApiConfigurationDialogComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,

    MDBBootstrapModule.forRoot(),

    MatSliderModule,
    MatIconModule,

    MatCardModule,
    MatGridListModule,
    MatDividerModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatListModule,
    MatTableModule,
    MatFormFieldModule,
    FormsModule,
    MatInputModule,
    MatDialogModule,
    MatCheckboxModule,

    FlexLayoutModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
