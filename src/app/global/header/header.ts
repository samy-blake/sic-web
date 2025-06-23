import { Component, inject } from "@angular/core";
import { NgIcon, provideIcons, provideNgIconsConfig } from "@ng-icons/core";
import {
  faSolidChevronDown,
  faSolidUserSecret,
} from "@ng-icons/font-awesome/solid";
import { MatDialog, MatDialogModule } from "@angular/material/dialog";
import { User } from "./user/user";

@Component({
  selector: "app-header",
  imports: [NgIcon, MatDialogModule],
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
  private _dialog = inject(MatDialog);

  openUserDialog() {
    this._dialog.open(User, {
      position: {
        top: "0",
      },
    });
  }
}
