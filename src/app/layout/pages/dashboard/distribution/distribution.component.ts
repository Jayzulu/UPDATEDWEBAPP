import { Component, AfterViewInit, ViewChild, ElementRef } from '@angular/core';
import { Chart } from 'chart.js/auto';
import { Router, NavigationEnd } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-distribution',
  templateUrl: './distribution.component.html',
  styleUrl: './distribution.component.scss'
})
export class DistributionComponent {
  @ViewChild('departmentDistribution') departmentChartRef!: ElementRef;
  @ViewChild('employmentStatus') employmentChartRef!: ElementRef;

  chartDepartment: any;
  chartEmployment: any;
  showContent = true;
  private routerSubscription!: Subscription;

  constructor(private router: Router) {}

  ngOnInit(): void {
    this.routerSubscription = this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        this.showContent = this.router.url === '/dashboard/distribution';

        if (this.showContent) {
          this.destroyCharts();
          setTimeout(() => {
            this.renderDepartmentDistribution();
            this.renderEmploymentStatus();
          }, 0);
        }
      }
    });
  }

  ngAfterViewChecked(): void {
    if (this.showContent && !this.chartDepartment && !this.chartEmployment) {
      setTimeout(() => {
        this.renderDepartmentDistribution();
        this.renderEmploymentStatus();
      }, 0);
    }
  }

  renderDepartmentDistribution() {
    if (this.departmentChartRef) {
      const ctx = this.departmentChartRef.nativeElement as HTMLCanvasElement;
      this.chartDepartment = new Chart(ctx, {
        type: 'pie',
        data: {
          labels: ['SBA', 'SEA', 'SOC', 'SAS', 'SNAMS', 'SED', 'SHTM', 'CCJEF'],
          datasets: [{
            data: [20, 30, 25, 10, 15, 10, 45, 30],
            backgroundColor: ['#cc9933', '#cc3300', '#FF9900', '#663333', '#006600','#003366', '#cc3366', '#800080' ]
          }]
        },
        options: {
          responsive: true,
          maintainAspectRatio: false,
          onClick: (event, elements) => {
            if (elements.length > 0 && this.chartDepartment?.data?.labels) {
              const index = elements[0].index;
              const label = this.chartDepartment.data.labels[index] as string;
              this.navigateToRoute(label);
            }
          }
        }
      });
    }
  }

  renderEmploymentStatus() {
    if (this.employmentChartRef) {
      const ctx = this.employmentChartRef.nativeElement as HTMLCanvasElement;
      this.chartEmployment = new Chart(ctx, {
        type: 'bar',
        data: {
          labels: ['Full-Time', 'Part-Time', 'Contract', 'Probation'],
          datasets: [{
            label: 'Count',
            data: [60, 25, 15, 10],
            backgroundColor: ['#FF9800', '#d96459', '#4CAF50', '#f2e394']
          }]
        },
        options: {
          responsive: true,
          maintainAspectRatio: false,
          onClick: (event, elements) => {
            if (elements.length > 0 && this.chartEmployment?.data?.labels) {
              const index = elements[0].index;
              const label = this.chartEmployment.data.labels[index] as string;
              this.navigateToRoute(label);
            }
          }
        }
      });
    }
  }

  navigateToRoute(label: string) {
    switch (label) {
      case 'SBA': this.router.navigateByUrl('/dashboard/distribution/sba'); break;
      case 'SEA': this.router.navigate(['/dashboard/distribution/sea']); break;
      case 'SOC': this.router.navigate(['/dashboard/distribution/soc']); break;
      case 'SAS': this.router.navigate(['/dashboard/distribution/sas']); break;
      case 'SNAMS': this.router.navigate(['/dashboard/distribution/snams']); break;
      case 'SED': this.router.navigate(['/dashboard/distribution/sed']); break;
      case 'SHTM': this.router.navigate(['/dashboard/distribution/shtm']); break;
      case 'CCJEF': this.router.navigate(['/dashboard/distribution/ccjef']); break;
      default: break;
    }
  }
  destroyCharts() {
    if (this.chartDepartment) {
      this.chartDepartment.destroy();
      this.chartDepartment = null;
    }
    if (this.chartEmployment) {
      this.chartEmployment.destroy();
      this.chartEmployment = null;
    }
  }

  ngOnDestroy(): void {
    if (this.routerSubscription) {
      this.routerSubscription.unsubscribe();
    }
  }
}