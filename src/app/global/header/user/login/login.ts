import { Component, inject } from "@angular/core";
import { FormBuilder, ReactiveFormsModule, Validators } from "@angular/forms";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatInputModule } from "@angular/material/input";
import { MatSlideToggleModule } from "@angular/material/slide-toggle";
import { NgIcon, provideIcons } from "@ng-icons/core";
import { faSolidLock, faSolidUser } from "@ng-icons/font-awesome/solid";

@Component({
  selector: "app-login",
  imports: [
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatSlideToggleModule,
    NgIcon,
  ],
  providers: [provideIcons({ faSolidUser, faSolidLock })],
  templateUrl: "./login.html",
  styleUrl: "./login.scss",
})
export class Login {
  private _formBuilder = inject(FormBuilder);
  public formGroup = this._formBuilder.group({
    username: ["", [Validators.required, Validators.minLength(3)]],
    password: ["", [Validators.required, Validators.minLength(3)]],
    remember: [false],
  });

  submit() {
    if (this.formGroup.invalid) return;
  }
}
