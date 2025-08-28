import { Component, inject, signal } from "@angular/core";
import { User } from "../../../service/user";
import { Router } from "@angular/router";
import { AuthApi } from "../../../service/auth-api";
import {
  FormBuilder,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from "@angular/forms";
import { InputGroupModule } from "primeng/inputgroup";
import { InputGroupAddonModule } from "primeng/inputgroupaddon";
import { InputTextModule } from "primeng/inputtext";
import { NgIcon, provideIcons, provideNgIconsConfig } from "@ng-icons/core";
import { ButtonModule } from "primeng/button";
import { MessageModule } from "primeng/message";
import { faSolidLock, faSolidUser } from "@ng-icons/font-awesome/solid";
import { API } from "../../../interface/api";

@Component({
  selector: "app-v-user-login",
  imports: [
    FormsModule,
    ReactiveFormsModule,
    InputGroupModule,
    InputGroupAddonModule,
    InputTextModule,
    NgIcon,
    ButtonModule,
    MessageModule,
  ],
  templateUrl: "./v-auth-login.html",
  styleUrl: "./v-auth-login.scss",
  providers: [
    provideIcons({ faSolidUser, faSolidLock }),
    provideNgIconsConfig({
      color: "#000",
    }),
  ],
  standalone: true,
})
export class VAuthLogin {
  private _userService = inject(User);
  private _authApi = inject(AuthApi);
  private _formBuilder = inject(FormBuilder);
  private _router = inject(Router);

  public isProcess = signal(false);
  public showError = signal(false);

  constructor() {
    if (this._userService.isAuth()) {
      const router: Router = inject(Router);
      router.navigate(["/user"]);
    }
  }
  public form = this._formBuilder.group({
    username: ["", Validators.required],
    password: ["", Validators.required],
  });

  loginSubmit() {
    if (this.form.invalid) return;

    const data: API.Auth.LoginBody = {
      username: this.form.value.username as string,
      password: this.form.value.password as string,
    };
    this.showError.set(false);
    this.isProcess.set(true);

    this._authApi.login(data).subscribe({
      next: (res) => {
        this._userService.setToken(res.token);
        this._userService.saveTokenToStorage(res.token);

        this._router.navigate(["/user"]);
      },
      error: () => {
        this.showError.set(true);
        this.isProcess.set(false);
      },
    });
  }
}
