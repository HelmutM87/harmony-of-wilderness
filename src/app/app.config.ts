
// import { ApplicationConfig } from '@angular/core';
// import { provideRouter } from '@angular/router';
// import { provideClientHydration } from '@angular/platform-browser';
// import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
// import { provideHttpClient } from '@angular/common/http';
// import { TranslateLoader } from '@ngx-translate/core';
// import { TranslateHttpLoader } from '@ngx-translate/http-loader';
// import { HttpClient } from '@angular/common/http';
// import { routes } from './app.routes';

// // Funktion, um den HttpLoader für die Übersetzungsdateien bereitzustellen
// export function HttpLoaderFactory(http: HttpClient) {
//   return new TranslateHttpLoader(http, './assets/i18n/', '.json');
// }

// export const appConfig: ApplicationConfig = {
//   providers: [
//     provideRouter(routes), // Routes einbinden
//     provideClientHydration(),
//     provideAnimationsAsync(),
//     provideHttpClient(),
//     {
//       provide: TranslateLoader,
//       useFactory: HttpLoaderFactory,
//       deps: [HttpClient]
//     }, provideAnimationsAsync()
//   ]
// };


// import { ApplicationConfig } from '@angular/core';
// import { provideRouter } from '@angular/router';
// import { provideClientHydration } from '@angular/platform-browser';
// import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
// import { provideHttpClient } from '@angular/common/http';
// import { provideTranslations, TranslateLoader } from '@ngx-translate/core';
// import { TranslateHttpLoader } from '@ngx-translate/http-loader';
// import { HttpClient } from '@angular/common/http';
// import { routes } from './app.routes';

// // Funktion, um den HttpLoader für die Übersetzungsdateien bereitzustellen
// export function HttpLoaderFactory(http: HttpClient) {
//   return new TranslateHttpLoader(http, './assets/i18n/', '.json');
// }

// export const appConfig: ApplicationConfig = {
//   providers: [
//     provideRouter(routes), // Routes einbinden
//     provideClientHydration(),
//     provideAnimationsAsync(),
//     provideHttpClient(),
//     provideTranslations({
//       loader: {
//         provide: TranslateLoader,
//         useFactory: HttpLoaderFactory,
//         deps: [HttpClient]
//       }
//     })
//   ]
// };


// import { ApplicationConfig } from '@angular/core';
// import { provideRouter } from '@angular/router';
// import { provideClientHydration } from '@angular/platform-browser';
// import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
// import { provideHttpClient } from '@angular/common/http';
// import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
// import { TranslateHttpLoader } from '@ngx-translate/http-loader';
// import { HttpClient } from '@angular/common/http';
// import { routes } from './app.routes';

// // Funktion, um den HttpLoader für die Übersetzungsdateien bereitzustellen
// export function HttpLoaderFactory(http: HttpClient) {
//   return new TranslateHttpLoader(http, './assets/i18n/', '.json');
// }

// export const appConfig: ApplicationConfig = {
//   providers: [
//     provideRouter(routes), // Routes einbinden
//     provideClientHydration(),
//     provideAnimationsAsync(),
//     provideHttpClient(),
//     {
//       provide: TranslateLoader,
//       useFactory: HttpLoaderFactory,
//       deps: [HttpClient]
//     },
//     ...TranslateModule.forRoot({
//       loader: {
//         provide: TranslateLoader,
//         useFactory: HttpLoaderFactory,
//         deps: [HttpClient]
//       }
//     }).providers
//   ]
// };



// import { ApplicationConfig } from '@angular/core';
// import { provideRouter } from '@angular/router';
// import { provideClientHydration } from '@angular/platform-browser';
// import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
// import { provideHttpClient } from '@angular/common/http';
// import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
// import { TranslateHttpLoader } from '@ngx-translate/http-loader';
// import { HttpClient } from '@angular/common/http';
// import { routes } from './app.routes';

// // Funktion, um den HttpLoader für die Übersetzungsdateien bereitzustellen
// export function HttpLoaderFactory(http: HttpClient) {
//   return new TranslateHttpLoader(http, './assets/i18n/', '.json');
// }

// export const appConfig: ApplicationConfig = {
//   providers: [
//     provideRouter(routes), // Routes einbinden
//     provideClientHydration(),
//     provideAnimationsAsync(),
//     provideHttpClient(),
//     {
//       provide: TranslateLoader,
//       useFactory: HttpLoaderFactory,
//       deps: [HttpClient]
//     },
//     ...(TranslateModule.forRoot({
//       loader: {
//         provide: TranslateLoader,
//         useFactory: HttpLoaderFactory,
//         deps: [HttpClient]
//       }
//     }).providers ?? [])
//   ]
// };



// import { ApplicationConfig } from '@angular/core';
// import { provideRouter } from '@angular/router';
// import { provideClientHydration } from '@angular/platform-browser';
// import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
// import { provideHttpClient } from '@angular/common/http';
// import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
// import { TranslateHttpLoader } from '@ngx-translate/http-loader';
// import { HttpClient } from '@angular/common/http';
// import { routes } from './app.routes';

// // Funktion, um den HttpLoader für die Übersetzungsdateien bereitzustellen
// export function HttpLoaderFactory(http: HttpClient) {
//   return new TranslateHttpLoader(http, './assets/i18n/', '.json');
// }

// export const appConfig: ApplicationConfig = {
//   providers: [
//     provideRouter(routes), // Routes einbinden
//     provideClientHydration(),
//     provideAnimationsAsync(),
//     provideHttpClient(),
//     ...TranslateModule.forRoot({
//       loader: {
//         provide: TranslateLoader,
//         useFactory: HttpLoaderFactory,
//         deps: [HttpClient]
//       }
//     }).providers
//   ]
// };

// import { ApplicationConfig } from '@angular/core';
// import { provideRouter } from '@angular/router';
// import { provideClientHydration } from '@angular/platform-browser';
// import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
// import { provideHttpClient } from '@angular/common/http';
// import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
// import { TranslateHttpLoader } from '@ngx-translate/http-loader';
// import { HttpClient } from '@angular/common/http';
// import { routes } from './app.routes';

// // Funktion, um den HttpLoader für die Übersetzungsdateien bereitzustellen
// export function HttpLoaderFactory(http: HttpClient) {
//   return new TranslateHttpLoader(http, './assets/i18n/', '.json');
// }

// export const appConfig: ApplicationConfig = {
//   providers: [
//     provideRouter(routes), // Routes einbinden
//     provideClientHydration(),
//     provideAnimationsAsync(),
//     provideHttpClient(),
//     ...(TranslateModule.forRoot({
//       loader: {
//         provide: TranslateLoader,
//         useFactory: HttpLoaderFactory,
//         deps: [HttpClient]
//       }
//     }).providers ?? [])
//   ]
// };


import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideClientHydration } from '@angular/platform-browser';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { provideHttpClient } from '@angular/common/http';
import { TranslateModule, TranslateLoader, TranslateService } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { HttpClient } from '@angular/common/http';
import { routes } from './app.routes';

// Funktion, um den HttpLoader für die Übersetzungsdateien bereitzustellen
export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes), // Routes einbinden
    provideClientHydration(),
    provideAnimationsAsync(),
    provideHttpClient(),
    TranslateService, // Hinzufügen von TranslateService
    ...(TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      }
    }).providers ?? [])
  ]
};