import { CommonModule } from '@angular/common';
import { Router, RouterModule } from '@angular/router';
import { Component, Input, HostListener, ElementRef, ViewChild, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-employeeinfo',
  standalone: true,
  imports: [CommonModule, RouterModule,  FormsModule, ],
  templateUrl: './employeeinfo.component.html',
  styleUrl: './employeeinfo.component.css'
})
export class EmployeeinfoComponent implements OnInit {
  searchQuery: string = '';
  employees = [
    {
      id: 'employee1',
      name: 'Cheena Maxine',
      contact: '12345678910',
      email: 'chichi123@gmail.com',
      department: 'School of Computing',
      location: 'Hybrid',
      employmentType: 'Full-Time',
      status: 'Active',
      dateHired: 'July 20, 2024',
      documents: 'Resume, Contract'
    },
    {
      id: 'employee2',
      name: 'Dacquil Kristine Joy',
      contact: '12345678910',
      email: 'tinetine123@gmail.com',
      department: 'School of Computing',
      location: 'On-Site',
      employmentType: 'Full-Time',
      status: 'Active',
      dateHired: 'July 20, 2024',
      documents: 'Resume, Contract'
    }
  ];
  filteredEmployees = [...this.employees];
  selectedEmployee: any = null;


  ngOnInit(): void {}

  searchEmployee(query: string) {
    this.filteredEmployees = this.employees.filter(emp =>
      emp.name.toLowerCase().includes(query.toLowerCase())
    );
  }
  updateEmployee(employee: any) {
    console.log("Updating employee:", employee);
  }
  
  deleteEmployee(employee: any) {
    console.log("Deleting employee:", employee);
  }
  
  moveToOffboarding(employee: any) {
    console.log("Moving to offboarding:", employee);
  }
  

  openModal(employee: any) {
    console.log("Opening modal for:", employee); 
    this.selectedEmployee = employee;
  }

  showDetails(employee: any) {
    this.selectedEmployee = employee;
  }

  closeModal() {
    this.selectedEmployee = null;
  }



user: any;
      constructor(private router: Router, private elementRef: ElementRef) {}
    
      @Input() collapsed = false;
      @Input() screenWidth = 0;
      @ViewChild('accountContainer') accountContainer!: ElementRef;
      showAccount = false;
    
      toggleAccount(event: Event) {
        event.stopPropagation(); 
        this.showAccount = !this.showAccount;
      }
      openAccountSettings() {
        console.log('Open Account Settings');
      }
      logout() {
        console.log('Logout');
        this.router.navigate(['/loginandsignup']);
      }

      
      @HostListener('document:click', ['$event'])
      closePopups(event: Event) {
        if (this.accountContainer) {
          const clickedInsideAccount = this.accountContainer.nativeElement.contains(event.target);
    
          if (!clickedInsideAccount) {
            this.showAccount = false;
          }
        }
      }

}
