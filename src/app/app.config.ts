import { ApplicationConfig, provideZoneChangeDetection, importProvidersFrom } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { HttpClient, provideHttpClient } from '@angular/common/http';
import { TranslateLoader, TranslateModule, TranslateStore} from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';

export function HttpLoaderFactory(httpClient: HttpClient) {
  return  new  TranslateHttpLoader(httpClient, './assets/i18n/', '.json');
}
export const provideTranslation = () => ({
  defaultLanguage: 'en',
  loader: {
    provide: TranslateLoader,
    useFactory: HttpLoaderFactory,
    deps: [HttpClient],
  },
});

export const appConfig: ApplicationConfig = {
  providers: [
    TranslateStore,
    provideZoneChangeDetection({ eventCoalescing: true }),
     provideRouter(routes), 
     provideHttpClient(),
     importProvidersFrom([
      TranslateModule.forRoot(provideTranslation())
    ]),
  ]
};
