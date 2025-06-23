import { computed, Injectable, signal } from "@angular/core";

@Injectable({
  providedIn: "root",
})
export class UserService {
  private _token = signal<string>("");
  public isAuth = computed(() => !!this._token());

  constructor() {
    console.log(this.isAuth);
  }
}
