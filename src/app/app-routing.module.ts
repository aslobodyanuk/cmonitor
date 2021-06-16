import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { TemperatureDetailedViewComponent } from './temperature-detailed-view/temperature-detailed-view.component';
import { HumidityDetailedViewComponent } from './humidity-detailed-view/humidity-detailed-view.component';
import { LoginComponent } from './login/login.component';
import { ApiConfigurationViewComponent } from './api-configuration-view/api-configuration-view.component';

const routes: Routes = [
  { path: '', component: DashboardComponent },
  { path: 'detail/temperature', component: TemperatureDetailedViewComponent },
  { path: 'detail/humidity', component: HumidityDetailedViewComponent },
  { path: 'login', component: LoginComponent },
  { path: 'config/api', component: ApiConfigurationViewComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
