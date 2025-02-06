import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component';
import { OnboardComponent } from './onboard/onboard.component';
import { OffboardComponent } from './offboard/offboard.component';
import { EmployeeInfoComponent } from './employee-info/employee-info.component';
import { NavbarComponent } from '../../components/navbar/navbar.component';
import { DistributionComponent } from './distribution/distribution.component';
import { FormsModule } from '@angular/forms';
import { OnboardingAnalyticsComponent } from './onboarding-analytics/onboarding-analytics.component';
import { OffboardingAnalyticsComponent } from './offboarding-analytics/offboarding-analytics.component';
import { OnboardingReportComponent } from './onboarding-report/onboarding-report.component';
import { OffboardingReportComponent } from './offboarding-report/offboarding-report.component';
import { AuditLogsComponent } from './audit-logs/audit-logs.component';


@NgModule({
  declarations: [
    DashboardComponent,
    OnboardComponent,
    OffboardComponent,
    EmployeeInfoComponent,
    NavbarComponent,
    DistributionComponent,
    OnboardingAnalyticsComponent,
    OffboardingAnalyticsComponent,
    OnboardingReportComponent,
    OffboardingReportComponent,
    AuditLogsComponent
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    FormsModule
  ]
})
export class DashboardModule { }
