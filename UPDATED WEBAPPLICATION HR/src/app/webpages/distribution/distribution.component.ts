import { Component, AfterViewInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Chart } from 'chart.js/auto';
import { Router } from '@angular/router';

@Component({
  selector: 'app-distribution',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './distribution.component.html',
  styleUrls: ['./distribution.component.css']
})
export class DistributionComponent implements AfterViewInit {
  private chartDepartment: Chart | undefined;
  private chartEmployment: Chart | undefined;

  constructor(private router: Router) {}

  ngAfterViewInit() {
    this.renderDepartmentDistribution();
    this.renderEmploymentStatus();
  }

  renderDepartmentDistribution() {
    const ctx = document.getElementById('departmentDistribution') as HTMLCanvasElement;

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
            const index = elements[0].index; // Get the index of the clicked slice
            const label = this.chartDepartment.data.labels[index] as string; // Type-cast to string
            this.navigateToRoute(label); // Navigate based on the clicked label
          }
        }
      }
    });
  }

  renderEmploymentStatus() {
    const ctx = document.getElementById('employmentStatus') as HTMLCanvasElement;

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
            const index = elements[0].index; // Get the index of the clicked element
            const label = this.chartEmployment.data.labels[index] as string; // Type-cast to string
            this.navigateToRtx(label); // Navigate based on the clicked label
          }
        }
      }
    });
  }

  navigateToRoute(label: string) {
    // Define routes for each label in the Department Distribution chart
    switch (label) {
      case 'SBA':
        this.router.navigate(['/sba']);
        break;
      case 'SEA':
        this.router.navigate(['/sea']);
        break;
      case 'SOC':
        this.router.navigate(['/soc']);
        break;
      case 'SAS':
        this.router.navigate(['/sas']);
        break;
      case 'SNAMS':
        this.router.navigate(['/snams']);
        break;
        case 'SED':
        this.router.navigate(['/sed']);
        break;
        case 'SHTM':
        this.router.navigate(['/shtm']);
        break;
        case 'CCJEF':
        this.router.navigate(['/ccjef']);
        break;
      default:
        break;
    }
  }

  navigateToRtx(label: string) {
    // Define routes for each label in the Employment Status chart
    switch (label) {
      case 'Full-Time':
        this.router.navigate(['/full-time']);
        break;
      case 'Part-Time':
        this.router.navigate(['/part-time']);
        break;
      case 'Contract':
        this.router.navigate(['/contract']);
        break;
      case 'Probation':
        this.router.navigate(['/probation']);
        break;
      default:
        break;
    }
  }
}
