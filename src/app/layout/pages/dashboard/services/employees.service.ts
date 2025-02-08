import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmployeesService {

  constructor(private firestore: AngularFirestore) {}

  getEmployees(): Observable<any[]> {
    return this.firestore.collection('employees').valueChanges();
  }
}
