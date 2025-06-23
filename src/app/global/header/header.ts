import { Component } from "@angular/core";
import { NgIcon, provideIcons, provideNgIconsConfig } from "@ng-icons/core";
import {
  faSolidChevronDown,
  faSolidUserSecret,
} from "@ng-icons/font-awesome/solid";

@Component({
  selector: "app-header",
  imports: [NgIcon],
  providers: [
    provideIcons({ faSolidUserSecret, faSolidChevronDown }),
    provideNgIconsConfig({
      color: "#000",
    }),
  ],
  templateUrl: "./header.html",
  styleUrl: "./header.scss",
})
export class Header {
}
