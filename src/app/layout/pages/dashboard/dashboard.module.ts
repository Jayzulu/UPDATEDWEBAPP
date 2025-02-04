import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component';
import { OnboardComponent } from './onboard/onboard.component';
import { OffboardComponent } from './offboard/offboard.component';
import { EmployeeInfoComponent } from './employee-info/employee-info.component';
import { NavbarComponent } from '../../components/navbar/navbar.component';


@NgModule({
  declarations: [
    DashboardComponent,
    OnboardComponent,
    OffboardComponent,
    EmployeeInfoComponent,
    NavbarComponent
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule
  ]
})
export class DashboardModule { }
