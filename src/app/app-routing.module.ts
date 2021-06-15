import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { TableViewComponent } from './table-view/table-view.component';
import { TemperatureDetailedViewComponent } from './temperature-detailed-view/temperature-detailed-view.component';
import { HumidityDetailedViewComponent } from './humidity-detailed-view/humidity-detailed-view.component';

const routes: Routes = [
  { path: '', component: DashboardComponent },
  { path: 'table-view', component: TableViewComponent },
  { path: 'detail/temperature', component: TemperatureDetailedViewComponent },
  { path: 'detail/humidity', component: HumidityDetailedViewComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
