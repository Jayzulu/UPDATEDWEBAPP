import { Component, AfterViewInit  } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Chart } from 'chart.js/auto';

@Component({
  selector: 'app-distribution',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './distribution.component.html',
  styleUrl: './distribution.component.css'
})
export class DistributionComponent implements AfterViewInit {
  ngAfterViewInit() {
    this.renderDepartmentDistribution();
    this.renderEmploymentStatus();
  }

  renderDepartmentDistribution() {
    const ctx = document.getElementById('departmentDistribution') as HTMLCanvasElement;
    new Chart(ctx, {
      type: 'pie',
      data: {
        labels: ['SBA', 'SEA', 'SOC', 'SAS', 'SNAMS'],
        datasets: [{
          data: [20, 30, 25, 10, 15],
          backgroundColor: ['#FF5722', '#4CAF50', '#03A9F4', '#FFC107', '#9C27B0']
        }]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false
    }
    });
  }

  renderEmploymentStatus() {
    const ctx = document.getElementById('employmentStatus') as HTMLCanvasElement;
    new Chart(ctx, {
      type: 'bar',
      data: {
        labels: ['Full-Time', 'Part-Time', 'Contract'],
        datasets: [{
          label: 'Count',
          data: [60, 25, 15],
          backgroundColor: ['#FF9800', '#9C27B0', '#4CAF50']
        }]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false
    }
    });
  }
}