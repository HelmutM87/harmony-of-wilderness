
import { ApplicationConfig, APP_INITIALIZER } from '@angular/core';
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

// Funktion, um die Standardsprache auf Deutsch zu setzen
export function initializeTranslateService(translate: TranslateService) {
  return () => translate.use('de');
}

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes), // Routes einbinden
    provideClientHydration(),
    provideAnimationsAsync(),
    provideHttpClient(),
    TranslateService,
    ...(TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      }
    }).providers ?? []),
    {
      provide: APP_INITIALIZER,
      useFactory: initializeTranslateService,
      deps: [TranslateService],
      multi: true
    }
  ]
};