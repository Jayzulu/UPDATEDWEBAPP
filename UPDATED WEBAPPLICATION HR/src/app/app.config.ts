import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getAuth, provideAuth } from '@angular/fire/auth';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';

export const appConfig: ApplicationConfig = {
  providers: [provideZoneChangeDetection({ eventCoalescing: true }), provideRouter(routes), provideFirebaseApp(() => initializeApp({ "projectId": "web-application-hr-firebase", "appId": "1:541416815105:web:da9d4cc862d9cc106c5e00", "storageBucket": "web-application-hr-firebase.firebasestorage.app", "apiKey": "AIzaSyBSNfYYEVgph4q5Nd5cShEm-cb2MsI4GHo", "authDomain": "web-application-hr-firebase.firebaseapp.com", "messagingSenderId": "541416815105" })), provideAuth(() => getAuth()), provideFirestore(() => getFirestore()), provideFirebaseApp(() => initializeApp({ "projectId": "web-application-hr-firebase", "appId": "1:541416815105:web:da9d4cc862d9cc106c5e00", "storageBucket": "web-application-hr-firebase.firebasestorage.app", "apiKey": "AIzaSyBSNfYYEVgph4q5Nd5cShEm-cb2MsI4GHo", "authDomain": "web-application-hr-firebase.firebaseapp.com", "messagingSenderId": "541416815105" })), provideAuth(() => getAuth()), provideFirestore(() => getFirestore())]
};
