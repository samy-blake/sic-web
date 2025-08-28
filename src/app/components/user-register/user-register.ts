import { Component, inject } from "@angular/core";
import { AuthApi } from "../../service/auth-api";
import { FormBuilder, ReactiveFormsModule } from "@angular/forms";

@Component({
  selector: "app-user-register",
  imports: [ReactiveFormsModule],
  templateUrl: "./user-register.html",
  styleUrl: "./user-register.scss",
  standalone: true,
})
export class UserRegister {
  private _authApi = inject(AuthApi);
  private _formBuilder = inject(FormBuilder);
  public form = this._formBuilder.group({});
}
