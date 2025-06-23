import { Component, computed, inject } from "@angular/core";
import {
  MatDialogActions,
  MatDialogClose,
  MatDialogContent,
  MatDialogTitle,
} from "@angular/material/dialog";
import { UserService } from "./user-service";
import { Login } from "./login/login";

@Component({
  selector: "app-user",
  imports: [
    MatDialogTitle,
    MatDialogContent,
    MatDialogActions,
    MatDialogClose,
    Login,
  ],
  templateUrl: "./user.html",
  styleUrl: "./user.scss",
})
export class User {
  private _user = inject(UserService);
  public isAuth = computed(() => this._user.isAuth());
}
