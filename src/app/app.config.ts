import { ApplicationConfig, provideBrowserGlobalErrorListeners } from '@angular/core';
import { provideRouter, withInMemoryScrolling, TitleStrategy } from '@angular/router';
import { provideNgtRenderer } from 'angular-three/dom';

import { routes } from './app.routes';
import { CustomTitleStrategy } from './i18n/custom-title.strategy';

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideRouter(
      routes,
      withInMemoryScrolling({
        anchorScrolling: 'enabled',
        scrollPositionRestoration: 'enabled',
      }),
    ),
    provideNgtRenderer(),
    { provide: TitleStrategy, useClass: CustomTitleStrategy },
  ],
};
