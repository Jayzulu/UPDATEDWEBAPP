import { Component, OnInit } from '@angular/core';
import { Chart } from 'chart.js/auto';

@Component({
  selector: 'app-onboardingana',
  standalone: true,
  imports: [],
  templateUrl: './onboardingana.component.html',
  styleUrl: './onboardingana.component.css'
})
export class OnboardinganaComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {
    this.renderOnboardingChart();
  }

  renderOnboardingChart(): void {
    const canvas = document.getElementById('onboardingTrend') as HTMLCanvasElement;
    if (canvas) {
      const ctx = canvas.getContext('2d');
      if (ctx) {
        new Chart(ctx, {
          type: 'line',
          data: {
            labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4'], // X-axis labels
            datasets: [
              {
                label: 'Pre-Boarding',
                data: [5, 10, 15, 12], // Y-axis data for Pre-Boarding
                borderColor: '#f44336',
                backgroundColor: 'rgba(244, 67, 54, 0.2)',
                fill: true,
              },
              {
                label: 'Orientation',
                data: [2, 4, 8, 10], // Y-axis data for Orientation
                borderColor: '#03a9f4',
                backgroundColor: 'rgba(3, 169, 244, 0.2)',
                fill: true,
              },
              {
                label: 'New Hire',
                data: [1, 2, 5, 8], // Y-axis data for New Hire
                borderColor: '#4caf50',
                backgroundColor: 'rgba(76, 175, 80, 0.2)',
                fill: true,
              },
            ],
          },
          options: {
            responsive: true, // Make the chart responsive
            plugins: {
              legend: {
                position: 'top', // Position the legend
              },
            },
            scales: {
              y: {
                beginAtZero: true, // Start Y-axis from 0
              },
            },
          },
        });
      } else {
        console.error('Unable to get canvas context.');
      }
    } else {
      console.error('Canvas element not found.');
    }
  }
}

