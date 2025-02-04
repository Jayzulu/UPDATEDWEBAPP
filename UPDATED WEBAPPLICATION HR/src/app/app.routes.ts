import { Routes } from '@angular/router';
import { LoginandsignupComponent } from './webpages/loginandsignup/loginandsignup.component';
import { HomeComponent } from './webpages/home/home.component';
import { DistributionComponent } from './webpages/distribution/distribution.component';
import { AuditlogsComponent } from './webpages/auditlogs/auditlogs.component';
import { EmployeeinfoComponent } from './webpages/employeeinfo/employeeinfo.component';
import { OffboardingprogressComponent } from './webpages/offboardingprogress/offboardingprogress.component';
import { OnboardingprogressComponent } from './webpages/onboardingprogress/onboardingprogress.component';
import { OnboardingComponent } from './webpages/onboarding/onboarding.component';
import { OffboardingComponent } from './webpages/offboarding/offboarding.component';
import { OffboardinganaComponent } from './webpages/offboardingana/offboardingana.component';        
import { OnboardinganaComponent } from './webpages/onboardingana/onboardingana.component';      


export const routes: Routes = [
    {
        path: '',
        redirectTo: 'loginandsignup',
        pathMatch: 'full'
    },
    {
        path: 'loginandsignup',
        component: LoginandsignupComponent
    },

            {
                path: 'home',
                component: HomeComponent
            },
            {
                path: 'distribution',
                component: DistributionComponent
            },
            {
                path: 'auditlogs',
                component: AuditlogsComponent
            },
            {
                path: 'employeeinfo',
                component: EmployeeinfoComponent
            },

            {
                path: 'offboardingprogress',
                component: OffboardingprogressComponent
            },
            {
                path: 'onboardingprogress',
                component: OnboardingprogressComponent
            },
            {
                path: 'onboarding',
                component: OnboardingComponent
            },
            {
                path: 'offboarding',
                component: OffboardingComponent
            },

            {
                path: 'offboardingana',
                component: OffboardinganaComponent
            },
            {
                path: 'onboardingana',
                component: OnboardinganaComponent
            },
];
