import { Component, OnInit  } from '@angular/core';
import { Chart } from 'chart.js/auto';


@Component({
  selector: 'app-offboardingana',
  standalone: true,
  imports: [],
  templateUrl: './offboardingana.component.html',
  styleUrl: './offboardingana.component.css'
})
export class OffboardinganaComponent  implements OnInit {
  constructor() {}

  ngOnInit(): void {
    this.renderOffboardingChart();
  }

  renderOffboardingChart(): void {
    const ctx = document.getElementById('offboardingTrend') as HTMLCanvasElement;

    new Chart(ctx, {
      type: 'line',
      data: {
        labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4'], // X-axis labels
        datasets: [
          {
            label: 'Pending',
            data: [4, 8, 6, 10], // Y-axis data for Pending
            borderColor: '#f44336',
            backgroundColor: 'rgba(244, 67, 54, 0.2)',
            fill: true
          },
          {
            label: 'Processing',
            data: [3, 5, 7, 8], // Y-axis data for Processing
            borderColor: '#03a9f4',
            backgroundColor: 'rgba(3, 169, 244, 0.2)',
            fill: true
          },
          {
            label: 'Completed',
            data: [2, 4, 9, 12], // Y-axis data for Completed
            borderColor: '#4caf50',
            backgroundColor: 'rgba(76, 175, 80, 0.2)',
            fill: true
          }
        ]
      },
      options: {
        responsive: true, // Makes the chart responsive
        plugins: {
          legend: {
            position: 'top' // Position of the legend
          }
        },
        scales: {
          y: {
            beginAtZero: true // Ensures Y-axis starts at 0
          }
        }
      }
    });
  }
}