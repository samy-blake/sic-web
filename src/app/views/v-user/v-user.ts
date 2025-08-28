import { Component, inject, Signal } from "@angular/core";
import { User as UserService } from "../../service/user";
import { UserRegister } from "../../components/user-register/user-register";

@Component({
  selector: "app-v-user",
  imports: [UserRegister],
  templateUrl: "./v-user.html",
  styleUrl: "./v-user.scss",
  standalone: true,
})
export class VUser {
  private _userService = inject(UserService);
  public isAuth: Signal<boolean> = this._userService.isAuth;
}
