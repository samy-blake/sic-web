import {
  ApplicationConfig,
  provideBrowserGlobalErrorListeners,
  provideZonelessChangeDetection,
} from "@angular/core";
import { provideRouter } from "@angular/router";

import { routes } from "./app.routes";
import {
  provideClientHydration,
  withEventReplay,
} from "@angular/platform-browser";
import { provideHttpClient, withFetch } from "@angular/common/http";
import { provideNgIconsConfig } from "@ng-icons/core";

export const appConfig: ApplicationConfig = {
  providers: [
    provideNgIconsConfig({
      color: "#fff",
    }),
    provideHttpClient(withFetch()),
    provideBrowserGlobalErrorListeners(),
    provideZonelessChangeDetection(),
    provideRouter(routes),
    provideClientHydration(withEventReplay()),
  ],
};
