import { Component } from "@angular/core";
import { RouterLink } from "@angular/router";

// import { NgIcon, provideIcons, provideNgIconsConfig } from "@ng-icons/core";
// import {
//   faSolidChevronDown,
//   faSolidUserSecret,
// } from "@ng-icons/font-awesome/solid";

@Component({
  selector: "app-header",
  // imports: [NgIcon],
  // providers: [
  //   provideIcons({ faSolidUserSecret, faSolidChevronDown }),
  //   provideNgIconsConfig({
  //     color: "#000",
  //   }),
  // ],
  templateUrl: "./header.html",
  styleUrl: "./header.scss",
  imports: [RouterLink],
})
export class Header {
}
