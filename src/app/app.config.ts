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
import Aura from "@primeuix/themes/aura";
import { provideAnimationsAsync } from "@angular/platform-browser/animations/async";
import { providePrimeNG } from "primeng/config";

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
    provideAnimationsAsync(),
    providePrimeNG({
      theme: {
        preset: Aura,
        options: {
          darkModeSelector: ".darl",
        },
      },
    }),
  ],
};
