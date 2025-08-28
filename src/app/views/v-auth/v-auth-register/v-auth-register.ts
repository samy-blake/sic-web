import { Component, inject, signal } from "@angular/core";
import {
  FormBuilder,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from "@angular/forms";
import { Router, RouterLink } from "@angular/router";
import { NgIcon, provideIcons, provideNgIconsConfig } from "@ng-icons/core";
import {
  faSolidEnvelope,
  faSolidLock,
  faSolidUser,
} from "@ng-icons/font-awesome/solid";
import { ButtonModule } from "primeng/button";
import { InputGroupModule } from "primeng/inputgroup";
import { InputGroupAddonModule } from "primeng/inputgroupaddon";
import { InputTextModule } from "primeng/inputtext";
import { MessageModule } from "primeng/message";
import { AuthApi } from "../../../service/auth-api";
import { API } from "../../../interface/api";
import { User } from "../../../service/user";

@Component({
  selector: "app-v-user-register",
  imports: [
    FormsModule,
    ReactiveFormsModule,
    InputGroupModule,
    InputGroupAddonModule,
    InputTextModule,
    NgIcon,
    ButtonModule,
    MessageModule,
    RouterLink,
  ],
  templateUrl: "./v-auth-register.html",
  styleUrl: "./v-auth-register.scss",
  providers: [
    provideIcons({ faSolidUser, faSolidLock, faSolidEnvelope }),
    provideNgIconsConfig({
      color: "#000",
    }),
  ],
  standalone: true,
})
export class VUserRegister {
  private _authApi = inject(AuthApi);
  private _formBuilder = inject(FormBuilder);
  private _userService = inject(User);

  public isProcess = signal(false);
  public showError = signal(false);
  public showSuccess = signal(false);

  constructor() {
    if (this._userService.isAuth()) {
      const router: Router = inject(Router);
      router.navigate(["/user"]);
    }
  }

  public form = this._formBuilder.group({
    username: ["", Validators.required],
    password: ["", Validators.required],
    email: ["", Validators.email],
  });

  registerSubmit() {
    if (this.form.invalid) return;

    const data: API.Auth.RegisterBody = {
      username: this.form.value.username as string,
      password: this.form.value.password as string,
      ...(this.form.value.email ? { email: this.form.value.email } : {}),
    };
    this.showError.set(false);
    this.showSuccess.set(false);
    this.isProcess.set(true);

    this._authApi.register(data).subscribe({
      next: () => {
        this.showSuccess.set(true);
      },
      error: () => {
        this.showError.set(true);
        this.isProcess.set(false);
      },
    });
  }
}
