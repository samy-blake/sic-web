import {
  computed,
  Injectable,
  Signal,
  signal,
  WritableSignal,
} from "@angular/core";

@Injectable({
  providedIn: "root",
})
export class User {
  public isAuth: Signal<boolean> = computed(() => !!this._token());
  private _token: WritableSignal<string> = signal("");

  setToken(token: string) {
    this._token.set(token);
  }
}
