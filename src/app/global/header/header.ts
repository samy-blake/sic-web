import { Component, inject } from "@angular/core";
import { NgIcon, provideIcons, provideNgIconsConfig } from "@ng-icons/core";
import {
  faSolidChevronDown,
  faSolidPeopleGroup,
  faSolidPodcast,
  faSolidUserSecret,
} from "@ng-icons/font-awesome/solid";
import { MatDialog, MatDialogModule } from "@angular/material/dialog";
import { User } from "./user/user";
import { Mission } from "./mission/mission";
import { Maker } from "./maker/maker";

@Component({
  selector: "app-header",
  imports: [NgIcon, MatDialogModule],
  providers: [
    provideIcons({
      faSolidUserSecret,
      faSolidChevronDown,
      faSolidPodcast,
      faSolidPeopleGroup,
    }),
    provideNgIconsConfig({
      color: "#000",
    }),
  ],
  templateUrl: "./header.html",
  styleUrl: "./header.scss",
})
export class Header {
  private _dialog = inject(MatDialog);

  openMakerDialog() {
    this._dialog.open(Maker);
  }

  openMissionDialog() {
    this._dialog.open(Mission);
  }

  openUserDialog() {
    this._dialog.open(User);
  }
}
