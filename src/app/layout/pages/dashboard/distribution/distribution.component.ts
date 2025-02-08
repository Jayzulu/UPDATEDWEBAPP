import { Component, ElementRef, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { Chart } from 'chart.js/auto';

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

  constructor(private router: Router) {}

  ngAfterViewInit(): void {
    this.renderDepartmentDistribution();
    this.renderEmploymentStatus();
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
      case 'SBA': this.router.navigateByUrl('/dashboard/employee-distribution/sba'); break;
      case 'SEA': this.router.navigate(['/sea']); break;
      case 'SOC': this.router.navigate(['/soc']); break;
      case 'SAS': this.router.navigate(['/sas']); break;
      case 'SNAMS': this.router.navigate(['/snams']); break;
      case 'SED': this.router.navigate(['/sed']); break;
      case 'SHTM': this.router.navigate(['/shtm']); break;
      case 'CCJEF': this.router.navigate(['/ccjef']); break;
      default: break;
    }
  }
}
