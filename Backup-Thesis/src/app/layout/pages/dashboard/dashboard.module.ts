import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component';
import { OnboardComponent } from './onboard/onboard.component';
import { OffboardComponent } from './offboard/offboard.component';
import { EmployeeInfoComponent } from './employee-info/employee-info.component';
import { DistributionComponent } from './distribution/distribution.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { OnboardingReportComponent } from './onboarding-report/onboarding-report.component';
import { OffboardingReportComponent } from './offboarding-report/offboarding-report.component';
import { AuditLogsComponent } from './audit-logs/audit-logs.component';
import { SidebarComponent } from '../../components/sidebar/sidebar.component';

@NgModule({
  declarations: [
    DashboardComponent,
    OnboardComponent,
    OffboardComponent,
    EmployeeInfoComponent,
    SidebarComponent,
    DistributionComponent,
    OnboardingReportComponent,
    OffboardingReportComponent,
    AuditLogsComponent,
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class DashboardModule { }
