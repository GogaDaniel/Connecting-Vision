import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { provideRouter } from '@angular/router';
import { routes } from './app.routes';

import { provideClientHydration } from '@angular/platform-browser';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
// import {
//   getAnalytics,
//   provideAnalytics,
//   ScreenTrackingService,
// } from '@angular/fire/analytics';
// import { getPerformance, providePerformance } from '@angular/fire/performance';
// import {
//   getRemoteConfig,
//   provideRemoteConfig,
// } from '@angular/fire/remote-config';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    provideClientHydration(),
    importProvidersFrom(
      provideFirebaseApp(() =>
        initializeApp({
          projectId: 'connecting-vision',
          appId: '1:1058693252524:web:1d7b49eb650d7ba81a2609',
          databaseURL:
            'https://connecting-vision-default-rtdb.europe-west1.firebasedatabase.app',
          storageBucket: 'connecting-vision.appspot.com',
          apiKey: 'AIzaSyCmR9dCRqYGWiQwZAuXtpBFrjoHbdjq96I',
          authDomain: 'connecting-vision.firebaseapp.com',
          messagingSenderId: '1058693252524',
          measurementId: 'G-QJ7HQWDP6L',
        })
      )
    ),
    // importProvidersFrom(provideAnalytics(() => getAnalytics())),
    // ScreenTrackingService,
    // importProvidersFrom(providePerformance(() => getPerformance())),
    // importProvidersFrom(provideRemoteConfig(() => getRemoteConfig())), importProvidersFrom(provideFirebaseApp(() => initializeApp({"projectId":"connecting-vision","appId":"1:1058693252524:web:1d7b49eb650d7ba81a2609","databaseURL":"https://connecting-vision-default-rtdb.europe-west1.firebasedatabase.app","storageBucket":"connecting-vision.appspot.com","apiKey":"AIzaSyCmR9dCRqYGWiQwZAuXtpBFrjoHbdjq96I","authDomain":"connecting-vision.firebaseapp.com","messagingSenderId":"1058693252524","measurementId":"G-QJ7HQWDP6L"}))), importProvidersFrom(provideAnalytics(() => getAnalytics())), ScreenTrackingService, importProvidersFrom(providePerformance(() => getPerformance())), importProvidersFrom(provideRemoteConfig(() => getRemoteConfig())),
  ],
};
