import { Injectable } from '@angular/core';
import { Auth, signInWithEmailAndPassword, createUserWithEmailAndPassword, signOut, onAuthStateChanged, User } from '@angular/fire/auth';
import { Observable, of } from 'rxjs';
import { switchMap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  user$: Observable<User | null>;

  constructor(private auth: Auth) {
    this.user$ = new Observable((observer) => {
      onAuthStateChanged(this.auth, (user) => observer.next(user));
    });
  }

  register(email: string, password: string, fullName: string) {
    return createUserWithEmailAndPassword(this.auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        // Optionally update user's profile with full name
        return user;  // Return user object
      })
      .catch(error => {
        console.error('Error registering user:', error);
        throw error;  // Throw error for handling in component
      });
  }

  login(email: string, password: string) {
    return signInWithEmailAndPassword(this.auth, email, password);
  }

  logout() {
    return signOut(this.auth);
  }
}
